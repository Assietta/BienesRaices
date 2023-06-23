const axios = require('axios');
const { RealState } = require('../db');

const getPropertyByIdController = async (id) => {
  try {
    const data = await RealState.findOne({ where: { id: id } });
    return data;
  } catch (error) {
    throw new Error('Error al buscar la propiedad por ID');
  }
};

module.exports = getPropertyByIdController;