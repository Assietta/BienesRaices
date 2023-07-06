const axios = require('axios');
const { RealState } = require('../db');

const getRealState = async (page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  
  const allRealEstates = await RealState.findAll({
    offset,
    limit,
  });

  return allRealEstates;
};

module.exports = {
  getRealState,
};
