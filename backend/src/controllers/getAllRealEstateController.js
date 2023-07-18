const axios = require('axios');
const { cleanData } = require('../Helpers/cleanData');
require('dotenv').config();
const { API_KEY } = process.env;
const { RealState, Tag } = require('../db');

const getAllApi = async () => {
  let apiInfo = [];

  const URL = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&format=json&limit=112&offset=0&key=${API_KEY}`;
  const { data } = await axios(URL);
  apiInfo = cleanData(data);


  for (const property of apiInfo) {
    await RealState.findOrCreate({ where: property});
    const tags = property.tags || [];

    const promises = tags.map(async tag => {
      await Tag.findOrCreate({ where: {  name: tag.name, type: tag.type } });
    });

    await Promise.all(promises);
  }
};

module.exports = getAllApi;