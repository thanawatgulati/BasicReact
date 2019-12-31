const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

// table user
const product = sequelize.define(
  "product",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    //   primaryKey: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "-"
    },
    price: {
      type: Sequelize.NUMBER,
    //   defaultValue: "normal"
    },
    stock: {
        type: Sequelize.NUMBER,
        // defaultValue: "normal"
      }
  },
  {
    //option
  }
);

(async () => {
  await product.sync({ force: false });
})();

module.exports = product;
