module.exports = (sequelize, Sequelize) => {
  const CartItem = sequelize.define("crt", {
    CartID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    PPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PSize: {
      type: Sequelize.ENUM('M', 'L', 'X'),
      allowNull: false
    },
    PImage: {
      type: Sequelize.BLOB('long')
    }
  });

  return CartItem;
};
