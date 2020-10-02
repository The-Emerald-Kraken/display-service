const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('inventory', 'student', 'student', {
  dialect: 'mysql',
});

module.exports = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    allowNULL: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  ratingsAmt: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  carousel: {
    type: DataTypes.STRING(1000),
    allowNULL: false,
  },
  clothing_sizes: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  count: {
    type: DataTypes.INTEGER,
  },
  show: {
    type: DataTypes.BOOLEAN,
  },

}, {
  sequelize,
  modelName: 'Products',
});
