const request = require('request')

async function convertUrl(url) {
    try {
        const options = {
            url: `https://api.tinyurl.com/create?api_token=yCCV9UifhjYEw8Txe9BahR401pt6WLyHZrtPaeRmmx2zI5CMXHYIKKDORn2Q`,
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: `{"url":"${url}"}`
        }
        
        const response = await new Promise((resolve, reject) => {
            request(options, (error, res, body) => {
                const link = JSON.parse(res.body).data.tiny_url
                resolve(link)
            })
        })
        return response
    } catch (error) {
            return "API em manuntenção."
    }
}

// const url = 'https://www.youtube.com/watch?v=HgVkG_WjcOM&list=sssRDAMVMSYM-RJwSGQ8'
// convertUrl(url)

module.exports = convertUrl
