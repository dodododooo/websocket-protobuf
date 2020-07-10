package main

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"go_mall/pkg/pb"
	"go_mall/pkg/utils"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

func main() {
	client := WSClient{}
	fmt.Println("input UserId,DeviceId,SyncSequence")
	fmt.Scanf("%s %s %d", &client.UserId, &client.DeviceId, &client.Seq)
	client.Start()
	select {}
}

type WSClient struct {
	UserId   string
	DeviceId string
	Seq      int64
	Conn     *websocket.Conn
}

func (c *WSClient) Start() {
	header := http.Header{}
	now := time.Now()
	expired := now.Add(1 * time.Hour).Unix() //
	nonceStr := "nonce_str"
	token := "abcdefg" //
	header.Set("request_id", strconv.FormatInt(now.Unix(), 10))
	header.Set("user_id", c.UserId)
	header.Set("sign_at", strconv.FormatInt(now.Unix(), 10))
	header.Set("nonce_str", nonceStr)
	header.Set("device_id", c.DeviceId)
	tokenStr := utils.GetToken(c.UserId, expired, c.DeviceId, nonceStr, token)
	fmt.Println(tokenStr)
	header.Set("token", tokenStr)

	u := url.URL{Scheme: "ws", Host: "localhost:8181", Path: "/ws"}
	conn, resp, err := websocket.DefaultDialer.Dial(u.String(), header)
	if err != nil {
		return
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(bytes))
	c.Conn = conn

	c.SyncTrigger()
	go c.Heartbeat()
	go c.Receive()
	c.CustomerService()
}

func (c *WSClient) SyncTrigger() {
	c.Output(pb.PackageType_PT_SYNC, time.Now().UnixNano(), &pb.SyncInput{Seq: c.Seq})
}

func (c *WSClient) Heartbeat() {
	ticker := time.NewTicker(time.Minute * 4)
	for range ticker.C {
		c.Output(pb.PackageType_PT_HEARTBEAT, time.Now().UnixNano(), nil)
		fmt.Println("心跳发送")
	}
}

func (c *WSClient) CustomerService() {
	//cmdBytes, _ := json.Marshal(map[string]string{"share_user_id":"110"})
	c.Output(pb.PackageType_PT_MESSAGE_SERVICE, time.Now().UnixNano(), &pb.MessageSrvInput{
		ServiceType: pb.MsgSrvType_MST_CAI,
		MessageBody: &pb.MessageBody{
			// text 文本
			MessageType: pb.MessageType_MT_TEXT,
			MessageContent: &pb.MessageContent{
				Content: &pb.MessageContent_Text{Text: &pb.Text{Text: "红包怎么使用?"}},
			},
			// command 命令
			//MessageType: pb.MessageType_MT_COMMAND,
			//MessageContent: &pb.MessageContent{
			//	Content: &pb.MessageContent_Command{
			//		Command: &pb.Command{
			//			Code: 1001,
			//			Data: cmdBytes,
			//		},
			//	},
			//},
			//// 其他
			//MessageType: pb.MessageType_MT_FACE,
			//MessageContent: &pb.MessageContent{
			//	Content: &pb.MessageContent_Face{
			//		Face: &pb.Face{
			//			FaceId:  0,
			//			FaceUrl: "",
			//		},
			//	},
			//},
		},
	})
}

// 发送数据给服务端 - 可查看其发送的上行数据格式
func (c *WSClient) Output(pt pb.PackageType, requestId int64, message proto.Message) {
	var input = pb.Input{
		Type:      pt,
		RequestId: requestId,
	}
	if message != nil {
		bytes, err := proto.Marshal(message)
		if err != nil {
			fmt.Println(err)
			return
		}

		input.Data = bytes
	}

	writeBytes, err := proto.Marshal(&input)
	if err != nil {
		fmt.Println(err)
		return
	}

	err = c.Conn.WriteMessage(websocket.BinaryMessage, writeBytes)
	if err != nil {
		fmt.Println(err)
	}
}

func (c *WSClient) Receive() {
	for {
		_, bytes, err := c.Conn.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}

		c.HandlePackage(bytes)
	}
}

func (c *WSClient) HandlePackage(bytes []byte) {
	var output pb.Output
	err := proto.Unmarshal(bytes, &output)
	if err != nil {
		fmt.Println(err)
		return
	}

	switch output.Type {
	case pb.PackageType_PT_HEARTBEAT:
		fmt.Println("心跳响应", c)
	case pb.PackageType_PT_SYNC:
		fmt.Println("离线消息同步开始------")
		syncResp := pb.SyncOutput{}
		err := proto.Unmarshal(output.Data, &syncResp)
		if err != nil {
			fmt.Println(err)
			return
		}
		fmt.Println("离线消息同步响应:code", output.Code, "message:", output.Message)
		fmt.Printf("%+v \n", output)
		for _, msg := range syncResp.Messages {
			fmt.Printf("消息：发送者类型：%d 发送者id：%s 请求id：%d 接收者类型：%d 接收者id：%s  消息内容：%+v seq：%d \n",
				msg.SenderType, msg.SenderId, msg.RequestId, msg.ReceiverType, msg.ReceiverId, msg.MessageBody.MessageContent, msg.Seq)
			c.Seq = msg.Seq
		}

		// 收到了同步消息后，发送同步回执
		ack := pb.MessageACKInput{
			DeviceAck:   c.Seq,
			ReceiveTime: utils.UnixMilliTime(time.Now()),
		}
		c.Output(pb.PackageType_PT_MESSAGE_ACK, output.RequestId, &ack)
		fmt.Println("离线消息同步结束------")
	case pb.PackageType_PT_MESSAGE_SERVICE:
		message := pb.MessageOutput{}
		err := proto.Unmarshal(output.Data, &message)
		if err != nil {
			fmt.Println(err)
			return
		}

		msg := message.Message
		fmt.Printf("消息服务类型：%s \n", message.ServiceType)
		fmt.Printf("消息：发送者类型：%d 发送者id：%s 请求id：%d 接收者类型：%d 接收者id：%s  消息内容：%+v seq：%d \n",
			msg.SenderType, msg.SenderId, msg.RequestId, msg.ReceiverType, msg.ReceiverId, msg.MessageBody.MessageContent, msg.Seq)

		// 收到了消息后，发送消息回执
		c.Seq = msg.Seq
		ack := pb.MessageACKInput{
			DeviceAck:   msg.Seq,
			ReceiveTime: utils.UnixMilliTime(time.Now()),
		}
		c.Output(pb.PackageType_PT_MESSAGE_ACK, output.RequestId, &ack)
	default:
		fmt.Println("switch other")
	}
}
