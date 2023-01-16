const urlDownload = require('./api/urlDownload')

module.exports = class Posts {
    async download(message) {
        if (message.body.startsWith('/baixar')) {
            const link = message.body.split(' ')[1]
            const numberImg = Number(message.body.split(' ')[2])
            console.log(numberImg === Number)
            const linkTrue = link.split('/')
            // console.log(linkTrue)
            
            // erro de links
            if (linkTrue[2] === 'music.youtube.com') {
                message.reply(`Não é possível baixar musícas no momento.`)
                return
            }

            if (linkTrue[0] !== 'https:') {
                message.reply(`Insira um link valido.`)
                return
            }
            
// erros Instagram
            if (!message.body.split(' ')[2]) {
                message.reply(`Não é possível baixar imagens unicas do instagram.
                Caso queira baixar uma publicação com varias imagens, use "/baixar https://www.link.com 3" onde o numero sera qual imagem você quer baixar.`)
            }
            
// erros youtube
            // console.log(respondeObj) // { error: 'Unknown error occurred.' } // baixando imagem twitter

            //yt music até gera links, mas não deixa ter acessos
// erros twitter

// baixar
//baixar instagram
            // console.log(respondeObj.medias[1].url) // https://www.instagram.com/reel/CnagCI8DDO_/?utm_source=ig_web_copy_link -- baixar esse tipo de rells
            // console.log(respondeObj.medias[1].url) // https://www.instagram.com/p/CmWidY4PtNw/ -- baixar esse tipo de stores
            // console.log(respondeObj.medias) // mais de uma imagem do instagram
//baixar youtube
// console.log(respondeObj.medias[20].url) // video youtube // videos no YT não tem padrao. é preciso fazer um diferente esquema, verifica a quality e a extension. de extension, pegar mp4 d cd qualidade, pegar a melhor
//baixar twitter



            const finalLink = await urlDownload(link, numberImg)
            message.reply(finalLink)
        }
    }
}