module.exports = function status(message) {
    if (message.body.startsWith('/status')) {
        message.reply(`*Minhas funções:*
- Frase personalizada para cada mensagem de um membro do grupo:
*Islaney*: feito
*Gugu*: implementando
*Miller*: implementando
*Arnaldo*: implementando

- Função para qualquer um habilitar ou desabilitar a frase personalizada para um membro especifico (implementando)

- Baixar videos: (implementado, porém beta, só gera links para baixar o vídeo.)

- Baixar imagens: (implementando)

- Criar links de números: (implementando)
`)
    }
}