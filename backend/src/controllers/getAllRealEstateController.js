const axios = require('axios');
const { cleanData } = require('../Helpers/cleanData');
require('dotenv').config();
const { API_KEY } = process.env;
const { RealState, Tag } = require('../db');

const getAllApi = async () => {
  let apiInfo = [];

<<<<<<< HEAD
  const URL = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&format=json&limit=112&offset=0&key=${API_KEY}`;
=======
  const URL = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&format=json&limit=300&offset=0&key=${API_KEY}`;
>>>>>>> 84d31afbc973159a396c2691fcae56f12f7abfd5
  const { data } = await axios(URL);
  apiInfo = cleanData(data);

  for (const property of apiInfo) {
    const realState = await RealState.findOrCreate({ where: property });
    const tags = property.tags || [];

    const promises = tags.map(async tag => {
      await Tag.findOrCreate({ where: { id: tag.id, name: tag.name, type: tag.type } });
    });

    await Promise.all(promises);
  }
};

module.exports = getAllApi;