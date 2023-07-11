const { RealState, Tag } = require("../db");
const { Op } = require("sequelize");

const postFilterController = async (
  type,
  operation_type,
  maxPrice,
  minPrice,
  orientation,
  currency,
  location,
  tags,
  parking_lot_amount,
  bathroom_amount,
  suite_amount,
  room_amount
) => {
  const filters = {};
  if (type) {
    filters.type = type;
  }
  if (operation_type) {
    filters.operation_type = operation_type;
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
  if (bathroom_amount) {
    filters.bathroom_amount = bathroom_amount;
  }
  if (orientation) {
    filters.orientation = orientation;
  }
  if (currency) {
    filters.currency = currency;
  }
  if (location) {
    filters.location = location;
  }
  if (minPrice) {
    filters.price = {
      [Op.gte]: minPrice,
    };
  }
  if (maxPrice) {
    filters.price = {
      ...filters.price,
      [Op.lte]: maxPrice,
    };
  }

  if (tags && tags.length > 0) {
    const tagNames = tags.map((tag) => tag.name);
    const tagIds = await Tag.findAll({
      attributes: ["id"],
      where: { name: tagNames },
    });
    const tagIdsArray = tagIds.map((tag) => tag.id);
    filters.tags = {
      [Op.contains]: tagIdsArray,
    };
  }
  console.log(filters);
  try {
    const properties = await RealState.findAll({
      where: filters,
    });
    return properties;
  } catch (error) {
    throw new Error("No se pudo concretar el filtro");
  }
};

module.exports = {
  postFilterController,
};
