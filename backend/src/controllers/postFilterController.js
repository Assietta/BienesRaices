const { RealState } = require('../db');
const { Op } = require('sequelize');

const postFilterController = async (type, operation_type, maxPrice, minPrice, orientation, currency, tags) => {
  const filters = {};
  if (type) {
    filters.type = type;
  }
  if (operation_type) {
    filters.operation_type = operation_type;
  }
  if (orientation) {
    filters.orientation = orientation;
  }
  if (currency) {
    filters.currency = currency;
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
  if (tags && tags.length > 0) {
    filters.tags = {
      [Op.contains]: tags
    };
  }

  try {
    const properties = await RealState.findAll({
      where: filters
    });
    return properties;
  } catch (error) {
    throw new Error('No se pudo concretar el filtro');
  }
};

module.exports = {
  postFilterController
};
