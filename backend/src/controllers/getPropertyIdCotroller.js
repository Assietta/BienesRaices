const axios = require('axios')

const getPropertyIdController = async(id) => {
    const { data } = await axios(`https://www.tokkobroker.com/api/v1/property/${id}/?lang=es_ar&format=json&key=b5ecdd05e6bffe9338822491fb3406d32dda03af`)

    return data
}

module.exports = getPropertyIdController