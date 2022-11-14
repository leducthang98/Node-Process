const axios = require('axios').default

const makeRequest = async (method, url, headers, body) => {
    try {
        const res = await axios({
            method,
            url,
            headers,
            data: body,

        })
        return res
    } catch (error) {
        return error
    }
}

module.exports = {
    makeRequest
}