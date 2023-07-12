const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Tag', {
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
