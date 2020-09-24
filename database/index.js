const { Sequelize, DataTypes, Model } = require('sequelize');
const faker = require('faker');

const sequelize = new Sequelize('inventory', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

class Products extends Model { }

Products.init({
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
  clothing_type: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
}, {
  sequelize,
  modelName: 'Products',
});

const seed = () => {
  let counter = 0;
  while (counter < 100) {
    const productName = faker.commerce.productName();
    const prices = (min, max) => ((Math.random() * (max - min) + min));
    const price = Number.parseFloat(prices(10, 250)).toFixed(2);
    const rating = Math.ceil(Math.random() * 5);
    const color = faker.commerce.color();
    const picker = (pants, shirt) => {
      const pick = Math.floor(Math.random() * 2);
      if (pick === 1) {
        return pants;
      }
      return shirt;
    };
    const picked = picker('pants', 'shirt');
    const description = faker.commerce.productDescription();
    Products.sync({ force: true })
      .then(() => (
        Products.create({
          product_name: productName,
          rating,
          price,
          color,
          description,
          clothing_type: picked,
        })
      ));
    counter += 1;
  }
};

seed();
