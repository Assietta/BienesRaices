const { DataTypes } = require('sequelize');
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
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    banios: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anios: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disposicion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expensas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plantas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alquilertemporal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orientacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estacionamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fotos: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    direccionreal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condiciondelinmueble: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    superficiecubierta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    habitaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    superficiesemicubierta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    situacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dormitorios: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    superficie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etiquetas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    toilettes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    superficietotal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descubierto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    }
  });
};
