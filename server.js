const qrcode = require('qrcode-terminal');
const convertUrl = require('./teste')

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

const names = {
    arnaldo: '5522988223236@c.us',
    slaney: '5522996015586@c.us',
}

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
    if (message.author === names.slaney) {
        message.reply('Te levantei até onde pude.')
    }
})
