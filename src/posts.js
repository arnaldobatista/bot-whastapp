const urlDownload = require('./api/urlDownload')

module.exports = class Posts {
    async download(message) {
        if (message.body.startsWith('/baixar')) {
            const url = message.body.split(' ')[1]
            const numberImg = message.body.split(' ')[2]
            const urlType = url.split('/')

            const objRetun = await urlDownload(url)
            console.log(objRetun)

            if (urlType[2] === 'www.instagram.com') {
                if (objRetun.url) {
                    if (urlType[3] === 'stories') {
                        const link = objRetun.url[1].url
                        message.reply(link)
                        return
                    }
    
                    const link = objRetun.url[0].url
                    message.reply(link)
                }
    
                if (objRetun[0]) {
                    if (!numberImg){
                        message.reply(`Para baixar uma postagem com mais de um item use:
    
*/baixar https://www.link.com 1*

O numero no final corresponde a postagem que você quer baixar.
                        `)
                        return
                    }
    
                    const numberArray = numberImg - 1
                    const link = objRetun[numberArray].url[0].url
                    message.reply(link)
                }
            }




            










            
            
            
            
            
            
        }
    }
}