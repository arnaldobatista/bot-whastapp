const urlDownload = require('./api/urlDownload')

module.exports = class Posts {
    async baixar(message) {
        if (message.body.startsWith('/baixar')) {
            const link = message.body.split(' ')[1]
            const linkTrue = link.split('/')

            if (linkTrue[3] === 'p') {
                message.reply(`Não é possível baixar imagens no momento.`)
                return
            }

            if (linkTrue[2] === 'music.youtube.com') {
                message.reply(`Não é possível baixar musícas no momento.`)
                return
            }

            if (linkTrue[3] === 'stories') {
                message.reply(`Não é possível baixar stories no momento.`)
                return
            }

            if (linkTrue[0] !== 'https:') {
                message.reply(`Insira um link valido.`)
                return
            }

            const finalLink = await urlDownload(link)
            message.reply(finalLink)
        }
    }
}