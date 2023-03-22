module.exports = (sequelize, Sequelize) => {
    const crt = sequelize.define("crt", {
      item: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.STRING,
      },
    });
    return crt;
  };
  