const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("cust", {
    customerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: Sequelize.INTEGER,
    },
    cName: {
      type: Sequelize.STRING(50),
    },
    cAddress: {
      type: Sequelize.STRING(200),
    },
    cPhone: {
      type: Sequelize.STRING(11),
    },
  });

  const Cart = require('./cart.model.js')(sequelize, Sequelize);
  Customer.belongsTo(Cart, {
    foreignKey: 'orderId',
    as: 'cart',
  });

  return Customer;
};
