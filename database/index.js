// const { Sequelize, DataTypes } = require('sequelize');
const faker = require('faker');
const Model = require('./model.js');

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
    Model.sync({ force: true })
      .then(() => (
        Model.create({
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