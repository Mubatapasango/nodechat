const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
 
const client = new Client({
    authStrategy: new LocalAuth(),
});
 
client.initialize();
 
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});
 
client.on('authenticated', () => {
    console.log('Authenticated');
  });
 
client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
    if(message.body === 'ping') {
        message.reply('pong');
    }
});