const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    provider:{
      type:DataTypes.STRING,
      defaultValue: 'credentials'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type:DataTypes.STRING(2080),
      allowNull: true
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'usuario',
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
  },
  });
};
