const urlDownload = require('./api/urlDownload')
const convertUrl = require('./api/convertUrl')

module.exports = class Posts {
    async download(message) {
        if (message.body.startsWith('/baixar')) {
            let url = message.body.split(' ')[1].split('/')[2] === 'music.youtube.com' ? `https://www.youtube.com/${message.body.split(' ')[1].split('/')[3]}` : message.body.split(' ')[1]
            const urlTrue = url.split('/')
            const numberImg = message.body.split(' ')[2]
            const urlType = url.split('/')

            if (urlTrue[0] !== 'https:') {
                message.reply('Insira um link valido!')
                return
            }

            const objRetun = await urlDownload(url)

            //checks
            if (objRetun.code === 102) {
                message.reply('A conversão falhou! Tente novamente ou tente outro link!')
                console.log('error 102')
                return
            }

            if (objRetun === 'API em manuntenção.') {
                console.log('API em manuntenção.')
                message.reply('A conversão falhou! Tente novamente ou tente outro link!')
                return
            }

            //dowload YT
            if (urlType[2] === 'www.youtube.com') {
                const link = objRetun.url[1].url
                const convertLink = await convertUrl(link)
                message.reply(convertLink)
                return
            }
            
            if (urlType[2] === 'youtube.com') {
                const link = objRetun.url[1].url
                const convertLink = await convertUrl(link)
                message.reply(convertLink)
                return
            }

            //dowload twitter
            if (urlType[2] === 'twitter.com') {
                const link = objRetun.url[0].url
                const convertLink = await convertUrl(link)
                message.reply(convertLink)
            }

            if (objRetun[0]) {
                if (!numberImg) {
                    message.reply(`Para baixar uma postagem com mais de um item use:
                        
*/baixar https://www.link.com 1*

O numero no final corresponde a postagem que você quer baixar.`)
                    return
                }

                const numberArray = numberImg - 1
                const link = objRetun[numberArray].url[0].url
                const convertLink = await convertUrl(link)
                message.reply(convertLink)
                return
            }

            //dowload tiktok 
            if (urlType[2] === 'www.tiktok.com') {
                const link = objRetun.url[0].url
                const convertLink = await convertUrl(link)
                message.reply(convertLink)
                return
            }

            //dowload instagram
            if (urlType[2] === 'www.instagram.com') {
                if (objRetun.url) {
                    console.log(objRetun.url.length)
                    if (objRetun.url.length >= 2) {
                        const link = objRetun.url[1].url
                        const convertLink = await convertUrl(link)
                        message.reply(convertLink)
                        return
                    }
                    const link = objRetun.url[0].url
                    const convertLink = await convertUrl(link)
                    message.reply(convertLink)
                    return
                }

                if (objRetun[0]) {
                    if (!numberImg) {
                        message.reply(`Para baixar uma postagem com mais de um item use:

*/baixar https://www.link.com 1*

O numero no final corresponde a postagem que você quer baixar.`)
                        return
                    }

                    const numberArray = numberImg - 1
                    const link = objRetun[numberArray].url[0].url
                    const convertLink = await convertUrl(link)
                    message.reply(convertLink)
                    return
                }
            }
        }
    }
}