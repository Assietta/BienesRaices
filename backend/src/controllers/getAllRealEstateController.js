const axios = require('axios');
const { cleanData } = require('../Helpers/cleanData');
require('dotenv').config();
const { API_KEY } = process.env;
const { RealState } = require('../db')

const getAllApi = async() => {
    let apiInfo = []

    // const URL = 'https://www.tokkobroker.com'
    // let next = `/api/v1/property/?lang=es_ar&format=json&limit=20&offset=0&key=${API_KEY}`

    // while (next !== null) {
    //     const { data } = await axios(URL + next)   
    //     apiInfo = [...apiInfo, ...cleanData(data)]
    //     next = data.meta.next
    // }

    const URL = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&format=json&limit=60&offset=0&key=${API_KEY}`
    const { data } = await axios(URL)
    apiInfo = cleanData(data)

    apiInfo.forEach(async property => await RealState.findOrCreate({ where: property }))


}

module.exports = getAllApi