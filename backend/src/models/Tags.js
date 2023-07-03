const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Tag', {
    id: {
      type: DataTypes.UUID, 
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
