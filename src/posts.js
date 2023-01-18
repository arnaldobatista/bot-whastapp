const urlDownload = require('./api/urlDownload')

module.exports = class Posts {
    async download(message) {
        if (message.body.startsWith('/baixar')) {
            // pegar informações da requisição mensagem
            const url = message.body.split(' ')[1]
            var numberImg = ''
            message.body.split(' ')[2] === undefined ? numberImg = undefined : numberImg = message.body.split(' ')[2] - 1
            

        }
    }
}