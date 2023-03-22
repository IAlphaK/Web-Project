module.exports = (sequelize, Sequelize) => {
  const cust = sequelize.define("cust", {
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });
  return cust;
};
