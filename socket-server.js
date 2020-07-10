const ws = require('nodejs-websocket');
const {pb} = require('./src/entity');
const server = ws.createServer(conn => {
  console.log('new ws connection');
  conn.on('text', str => {
    console.log("Received: " + str);
    conn.sendText(str);
  })
  conn.on('binary', inStream => {
    console.log("Received binary. ");
    var data = Buffer.alloc(0);
    inStream.on("readable", function () {
      var newData = inStream.read()
      if (newData)
        data = Buffer.concat([data, newData], data.length + newData.length)
    })
    inStream.on("end", function () {
      console.log("Received " + data.length + " bytes of binary data");
      let input = pb.Input.decode(data);
      let messageItem = pb.MessageItem.toObject(pb.MessageItem.decode(input.data));
      let text = messageItem.messageBody.messageContent.text.text;
      console.log('recive msg text: ', messageItem.messageBody.messageContent.text.text);
      let message = createMessage(`不知道!!${text}`);
      let messageBuffer = pb.Output.encode(message).finish();
      // let messageDecode = pb.Output.decode(messageBuffer);
      conn.sendBinary(messageBuffer);
      console.log('send message OK: ', `不知道!!${text}`);
    })
    
  })
  conn.on('close', e => {
    console.log('ws closed');
  })
  conn.on('error', e => {
    console.log('ws error');
  })
}).listen(8001);
console.log('watting connect...')

function createMessage (msg = '666') {
  let message_content = pb.MessageContent.create({ text: pb.Text.create({ text: msg }) });
  let message_body = pb.MessageBody.create({ messageType: pb.MessageType['MT_TEXT'], messageContent: message_content });
  let item = {
    requestId: 200,
    senderType: pb.SenderType['ST_SYSTEM'],
    senderId: '200',
    senderDeviceId: '65816180903907328',
    receiverType: pb.ReceiverType['RT_USER'],
    receiverId: '1',
    toUserIds: [],
    messageBody: message_body,
    seq: 1,
    sendAt: Date.now(),
    status: pb.MessageStatus['MS_NORMAL'],
  }
  let message = pb.MessageItem.create(item);
  let output = {
    type: pb.PackageType['PT_MESSAGE_SERVICE'],
    requestId: 200,
    code: 0,
    message: '',
    data: pb.MessageItem.encode(message).finish(),
  }
  let err = pb.Output.verify(output);
  console.log('verify input error: ', err);
  let result = pb.Output.create(output);
  return result;
}