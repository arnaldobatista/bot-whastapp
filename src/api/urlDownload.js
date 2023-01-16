const request = require('request')

async function urlDownload(url) {
    try {
        const options = {
            url: 'https://ssyoutube.online/wp-json/aio-dl/video-data/',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: `{"url":"${url}"}`
        }
        
        const response = await new Promise((resolve, reject) => {
            request(options, (error, res, body) => {
                if (error) {
                    reject(error)
                    console.log(error)
                } else {
                    const respondeObj = JSON.parse(res.body)

                    // deu erro:
                    // console.log(respondeObj) // https://www.instagram.com/reel/CnaVP2MBIoW/?utm_source=ig_web_copy_link baixar uma video normal da timeline do instagram: { error: 'Unknown error occurred.' }
                    // console.log(respondeObj) // baixar imagem unica do instagram { error: 'Unknown error occurred.' }
                    // console.log(respondeObj) // { error: 'Unknown error occurred.' } // baixando imagem twitter
                    // console.log(respondeObj) // { error: 'Unknown error occurred.' } https://www.instagram.com/stories/mayacarvalh0/3015812469558446264/ -- baixar esse tipo de stores
                    //yt music até gera links, mas não deixa ter acessos
                    
                    //deu certo
                    // console.log(respondeObj.medias[1].url) // https://www.instagram.com/reel/CnagCI8DDO_/?utm_source=ig_web_copy_link -- baixar esse tipo de rells
                    // console.log(respondeObj.medias[1].url) // https://www.instagram.com/p/CmWidY4PtNw/ -- baixar esse tipo de stores
                    // console.log(respondeObj.medias) // mais de uma imagem do instagram
                    // console.log(respondeObj.medias[0].url) // gif twitter
                    // console.log(respondeObj.medias[2].url) // video twitter
                    // console.log(respondeObj.medias[20].url) // video youtube // videos no YT não tem padrao. é preciso fazer um diferente esquema, verifica a quality e a extension. de extension, pegar mp4 d cd qualidade, pegar a melhor
                    
                    const teste = respondeObj.medias
                    console.log(teste)

                    // resolve(respondeObj.url[0].url)
                }
            })
        })

        return response
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return "API em manuntenção."
        }
        console.error(error)
    }
}

const url = 'https://www.youtube.com/watch?v=GqgWz-n4hdE&ab_channel=Marko'
urlDownload(url)

module.exports =  urlDownload