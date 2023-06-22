const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('RealState', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baños: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    años: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    plantas: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    fotos: {
      type: DataTypes.ARRAY,
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
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    superficie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etiquetas: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    Toilettes: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.ARRAY,
      allowNull: true,
    }
  });
};
