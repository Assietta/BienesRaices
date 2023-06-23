const axios = require('axios');
const { cleanData } = require('../Helpers/cleanData');

const getRealState = async () => {
  try {
    const realStateApi = await axios.get(
      `https://www.tokkobroker.com/api/v1/property/?format=json&offset=${offset}&limit=${limit}&key=b5ecdd05e6bffe9338822491fb3406d32dda03af&lang=es_ar`
    );
    const apiRaw = [realStateApi.data];


    const apiCleaned = await Promise.all(apiRaw.map(async (p) => {
      return cleanData(p);
    }));

    return apiCleaned;

  } catch (error) {
    throw new Error('Hubo un error');
  }
};

module.exports = {
  getRealState
};
