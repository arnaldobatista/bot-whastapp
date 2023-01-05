const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

const nomes = {
    arnaldo: '5522988223236@c.us',
    slaney: '5522996015586@c.us',
}

client.on('message', message => {

    console.log(message)

    if (message.author === nomes.slaney) {
        message.reply('Te levantei até onde pude.')
    }
});
