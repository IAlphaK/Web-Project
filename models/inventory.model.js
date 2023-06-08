module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("inv", {
    ProductID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    PStock: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PCategory: {
      type: Sequelize.ENUM('Casual', 'EW'),
      allowNull: false
    },
    PImage: {
      type: Sequelize.BLOB('long')
    }
  });
  
  return Product;
};
