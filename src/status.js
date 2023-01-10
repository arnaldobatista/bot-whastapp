module.exports = function status(message) {
    if (message.body.startsWith('/status')) {
        message.reply(`*Minhas funções:*
        
- Baixar videos: (implementado, porém beta, só gera links para baixar o vídeo.)

- Baixar imagens: (implementando)

- Criar links de números: (implementando)
`)
    }
}