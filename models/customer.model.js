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

  return Customer;
};
