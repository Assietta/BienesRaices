const { RealState } = require('../db');


const postFilterController = async (type, maxPrice, minPrice) => {
  const filters = {};
  if (type) {
    filters.type = type;
  }
  if (maxPrice && minPrice) {
    filters['$operations.prices.price$'] = {
      [Op.between]: [minPrice, maxPrice],
    };
  } else if (maxPrice) {
    filters['$operations.prices.price$'] = {
      [Op.lte]: maxPrice,
    };
  } else if (minPrice) {
    filters['$operations.prices.price$'] = {
      [Op.gte]: minPrice,
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