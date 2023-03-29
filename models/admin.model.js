module.exports = (sequelize, Sequelize) => {
    const adm = sequelize.define("adm", {
      sname: {
        type: Sequelize.STRING,
      },
      srole: {
        type: Sequelize.STRING,
      },
    });
    return adm;
  };
  