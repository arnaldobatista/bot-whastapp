const request = require('request')
module.exports = async function urlDownload(url) {
    try {
        const options = {
            url: 'https://ssyoutube.com/api/convert',
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
                } else {
                    const respondeObj = JSON.parse(res.body)

                    if (respondeObj.code === 102) {                        
                        resolve('Não é possivel baixar esse arquivo')
                    }

                    resolve(respondeObj.url[0].url)
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

// const url = 'https://twitter.com/patrlotas/status/1611418847277359104?s=48&t=NA2AWgIUuiuqleyxLt10zA'
// urlDownload(url)