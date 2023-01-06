const convertUrl = require('./api/convertUrl')

module.exports = function posts(message, onOff) {
    async function baixar(message) {
        if (message.body.startsWith('/baixar')) {
            const link = message.body.split(' ')[1]
            const linkTrue = link.split('/')
            console.log(linkTrue)

            if (linkTrue[3] === 'p') {
                message.reply(`Te levantei até onde pude. Baixar mulher só de calcinha não tem como.`)
                return
            }

            if (linkTrue[2] === 'music.youtube.com') {
                message.reply(`Te levantei até onde pude. Baixar musica não tem como.`)
                return
            }

            if (linkTrue[3] === 'stories') {
                message.reply(`Te levantei até onde pude. Baixar stories não tem como.`)
                return
            }

            if (linkTrue[0] !== 'https:') {
                message.reply(`Filho, vamos dar uma filtradinha e me mandar um link decente?`)
                return
            }

            const finalLink = await convertUrl(link)
            message.reply(finalLink)
        }
    }

    function zoeira(message, onOff) {
        const names = {
            arnaldo: '5522988223236@c.us',
            slaner: '5522996015586@c.us',
        }
        //contruir  a zoeira pro grupo todo .  o comando seria /on nomeDaPessoa.
        if (onOff[0]) {
            if (message.author === names.arnaldo) {
                message.reply('Te levantei até onde pude.')
            }
        }
    }

    baixar(message)
    zoeira(message, onOff)
}