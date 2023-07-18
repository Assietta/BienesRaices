const {Sequelize, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 sequelize.define('RealState', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    bathroom_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(3000),
      allowNull: false,
    },
    disposition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expenses: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floors_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    has_temporary_rent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operation_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orientation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parking_lot_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    real_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    property_condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roofed_surface: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semiroofed_surface: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    situation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    suite_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    surface: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
    },
    toilet_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_surface: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unroofed_surface: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    isVisible:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isReserved:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    geo_long:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    geo_lat:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};