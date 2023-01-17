const urlDownload = require('./api/urlDownload')

module.exports = class Posts {
    async download(message) {
        if (message.body.startsWith('/baixar')) {
            // pegar informações da requisição mensagem
            const url = message.body.split(' ')[1]
            var numberImg = ''
            message.body.split(' ')[2] === undefined ? numberImg = undefined : numberImg = message.body.split(' ')[2]

            const checkLink = url.split('/')
            // final pegar informações da requisição mensagem

            // tratamento link antes api
            if (checkLink[2] === 'music.youtube.com') {
                message.reply(`Não é possível baixar musícas no momento.`)
                return
            }

            if (checkLink[0] !== 'https:') {
                message.reply(`Insira um link valido.`)
                return
            }
            // final tratamento link antes api
            const callAPI = await urlDownload(url)
            console.log(callAPI.medias)
            // erros Instagram
            if (callAPI === 'error') {
                message.reply('Não é possível baixar esse link!')
                return
            }

            // erros youtube
            // erros twitter
            // erros facebook

            // baixar instagram

            if (url.split('/')[3] === 'p') {
                if (!numberImg) {
                    message.reply(`*Não é possível baixar imagens unicas do instagram!*

Caso queira baixar uma publicação com varias imagens ou vídeos, use: 
*/baixar https://www.link.com 3*
onde o numero será qual imagem você quer baixar.

Caso queria baixar um vídeo, use:
*/baixar https://www.link.com 1*
`)
                    return
                }

                var link = callAPI.medias
                const linkFinal = link[numberImg]
                message.reply(linkFinal.url)
                // return
            }
            // baixar youtube
            // baixar twitter
            // facebook



            // console.log(callAPI)
        }
    }
}