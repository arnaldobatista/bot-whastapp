const request = require('request')

module.exports = async function convertUrl(url) {
    try {
        const options = {
            url: 'https://ssyoutube.com/api/convert',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: `{"url":"${url}"}`
        };
        
        const response = await new Promise((resolve, reject) => {
            request(options, (error, res, body) => {
                if (error) {
                    reject(error);
                } else {
                    const respondeObj = JSON.parse(res.body)

                    if (respondeObj.code === 102) {
                        console.log('Não é possivel baixar esse arquivo')
                        
                        resolve('Filho, não tem como baixar isso. Vamos dobrar hoje?')
                        
                        return
                    }

                    resolve(respondeObj.url[0].url)
                }
            })
        })

        return response
    } catch (error) {
        console.error(error)
    }
}

// const url = 'https://www.youtube.com/watch?v=9LZc2kE0kXU&ab_channel=GabrielLuchina-UniversoHackintosh'
// convertUrl(url);
