const axios = require('axios');
// const { cleanData } = require('../Helpers/cleanData');
const { RealState } = require('../db')


const getRealState = async () => {
  const allRealEstates = await RealState.findAll()

  return allRealEstates
}

module.exports = {
  getRealState
};
