const { RealState } = require('../db');
const { Op } = require('sequelize');

const postFilterController = async (type, maxPrice, minPrice, orientation) => {
  const filters = {};
  if (type) {
    filters.type = type;
  }
  if (orientation) {
    filters.orientation = orientation;
  }

  if (minPrice) {
    filters.price = {
      [Op.gte]: minPrice
    };
  }
  if (maxPrice) {
    filters.price = {
      ...filters.price,
      [Op.lte]: maxPrice
    };
  }
  
  try {
    const properties = await RealState.findAll({
      where: filters
    });
    return properties;
  } catch (error) {
    throw new Error('no se pudo concretar el filtro');
  }
};

module.exports = {
  postFilterController
};