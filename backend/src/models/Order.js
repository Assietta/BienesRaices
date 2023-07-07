const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    client_idDB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usernameDB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    property_idDB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_of_property_to_reserveDB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaction_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_approved: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_first_nameMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_last_nameMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_emailMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_emailDB: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_identificationMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_phoneMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payer_idMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_method_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_type_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statement_descriptor_usernameMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status_approved_rejected: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status_detail_accredited: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taxes_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    transaction_amount_refunded: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};