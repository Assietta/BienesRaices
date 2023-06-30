const { RealState } = require('../db');
const { Op } = require('sequelize');

const postFilterController = async (type, operation_type, maxPrice, minPrice, orientation, currency, bathroom_amount, parking_lot_amount, room_amount, suite_amount, tags) => {
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
                    if (bathroom_amount) {
                      filters.bathroom_amount = bathroom_amount;
                    }
                    if (parking_lot_amount) {
                      filters.parking_lot_amount = parking_lot_amount;
                    }
                    if (room_amount) {
                      filters.room_amount = room_amount;
                    }
                    if (suite_amount) {
                      filters.suite_amount = suite_amount;
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
