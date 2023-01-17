const request = require('request')

async function urlDownload(url, numberImg) {
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
                    // console.log(respondeObj)
                    if (respondeObj.error) {
                        resolve(`Não é possível baixar esse link.`)
                        return
                    }

                    // baixar imagem com mais de um item do instagram
                    if (respondeObj.medias) {
                        const numberImgFinal = numberImg - 1

                        var link = respondeObj.medias
                        link.shift()
                        const linkFinal = link[numberImgFinal]

                        resolve(linkFinal.url)
                        return
                    }








                    resolve(respondeObj)
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

// const url = 'https://www.instagram.com/p/CncE8VIuNB5/'
// urlDownload(url)

module.exports =  urlDownload