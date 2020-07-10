<template>
  <div id="app" style="display: flex; flex-direction: column; height: 100vh; overflow: hidden; padding: 10px 10px 0 10px">
    <ul style="flex: 1; list-style: none; overflow-y: scroll;">
      <li v-for="(item, index) in list" :key="index" style="margin-bottom: 10px; display: flex" :style="{flexDirection: item.type == 'r' ? 'row-reverse' : 'row'}">
        <p style="max-width: 80%; border-radius: 5px; padding: 5px 10px; color: white" :style="{alignSelf: item.type == 'r' ? '' : '', backgroundColor: item.type == 'r' ? '#03A9F4' : '#9E9E9E'}">{{item.text}}</p>
      </li>
      <li ref="bottom"></li>
    </ul>
    <div style="display: flex; padding: 10px 0;">
      <input v-model="inputText" @keydown.enter="sendMsg" type="text" style="flex: 1; padding: 2px 5px;">
      <div @click="sendMsg" style="border-radius: 5px; background-color: #4CAF50; color: white; padding: 2px 10px;">发送</div>
    </div>
  </div>
</template>

<script>
import {pb} from './entity';
let socket = null;
import axios from 'axios';
export default {
  name: 'App',
  data () {
    return {
      list: [
        // {type: 'r', text: 'border-radius: 5px; background-color: #4CAF50; color: white; padding: 2px 10px;'},
        // {type: 's', text: 'border-radius: 5px; background-color: #4CAF50; color: white; padding: 2px 10px;'},
      ],
      inputText: '',
    }
  },
  created () {
    console.log(pb, socket, axios);
    this.initSocket();
  },
  methods: {
    scrollToBottom () {
      this.$refs['bottom'].scrollIntoView();
    },
    sendMsg () {
      let message = this.createMessage(this.inputText);
      let messageBuffer = pb.Input.encode(message).finish();
      socket.send(messageBuffer);
      this.inputText = '';
    },
    initSocket () {
      // let link = `ws://8.129.221.132:8181/ws`;
      let link = `ws://192.168.28.222:8001`;
      socket = new WebSocket(link);
      socket.onerror = () => {
        // console.log(e);
      }
      socket.onopen = () => {
        let message = this.createMessage('你好！');
        let messageBuffer = pb.Input.encode(message).finish();
        // let messageDecode = pb.Input.decode(messageBuffer);
        // console.log(message);
        // console.log(messageBuffer);
        // console.log(message.toJSON());
        socket.send(messageBuffer);
        // let mJson = {"RequestId":12,"MessageId":"1","PackageType":5,"ServiceType":0,"SenderId":"200","SenderDeviceId":"67940218442878976","ReceiverType":1,"ReceiverId":"200","ToUserIds":null,"MessageBody":{"MessageType":1,"MessageContent":"怎么样获取积分"},"SendTime":1594258837827};
        // socket.send(JSON.stringify(mJson));
      }
      socket.onmessage = (e) => {
        let msg = e.data;
        console.log('recived msg', msg);
        console.log('recived msg type: ', typeof msg);
        if (msg instanceof Blob) {
          msg.arrayBuffer().then(buffer => {
            console.log('buffer: ', buffer)
            let r = pb.Output.decode(new Uint8Array(buffer), buffer.byteLength);
            let msg = pb.MessageItem.toObject(pb.MessageItem.decode(r.data));
            let text = msg.messageBody.messageContent.text.text;
            this.list.push({type: 'l', text});
            this.$nextTick(() => {
              this.scrollToBottom();
            })
            console.log('recived msg: ', text);
          })
        }
      }
    },
    createMessage (msg) {
      this.list.push({type: 'r', text: msg});
      this.$nextTick(() => {
        this.scrollToBottom();
      })
      let message_content = pb.MessageContent.create({text: pb.Text.create({text: msg})});
      let message_body = pb.MessageBody.create({messageType: pb.MessageType['MT_TEXT'], messageContent: message_content});
      let item = {
        messageId: 1,
        serviceType: pb.MsgSrvType['MST_CAI'],
        senderId: '200',
        senderDeviceId: '65816180903907328',
        receiverType: pb.ReceiverType['RT_USER'],
        receiverId: '1',
        toUserIds: [],
        messageBody: message_body,
        sendTime: Date.now(),
      }
      let message = pb.MessageItem.create(item);
      let input = {
        type: pb.PackageType['PT_MESSAGE_SERVICE'],
        requestId: 200,
        data: pb.MessageItem.encode(message).finish(),
      }

      let err = pb.Input.verify(input);
      console.log('verify input error: ', err);
      let result = pb.Input.create(input);
      return result;
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
