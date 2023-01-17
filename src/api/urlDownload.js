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
                    if (respondeObj.error) {
                        resolve(`error`)
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