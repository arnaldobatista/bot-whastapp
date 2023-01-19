module.exports = function status(message) {
    if (message.body.startsWith('/help')) {
        message.reply(`*Minhas funções:*
Para baixar um video ou imagem use:
/baixar https://link.com.br

Baixar uma imagem especifica:
/baixar https://link.com.br 3

ajuda:
/help
`)
    }
}