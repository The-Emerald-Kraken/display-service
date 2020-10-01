const faker = require('faker');
const Model = require('./model.js');

const seed = () => {
  let counter = 0;
  while (counter < 100) {
    const random1 = Math.ceil(Math.random() * 100);
    const random2 = Math.ceil(Math.random() * 100);
    const random3 = Math.ceil(Math.random() * 100);
    const random4 = Math.ceil(Math.random() * 100);
    const random5 = Math.ceil(Math.random() * 100);
    const productName = faker.commerce.productName();
    const prices = (min, max) => ((Math.random() * (max - min) + min));
    const price = Number.parseFloat(prices(10, 250)).toFixed(2);
    const rating = Math.ceil(Math.random() * 5);
    const ratingsAmt = Math.floor(Math.random() * 1000);
    const color = faker.commerce.color();
    const image = `https://fecclothes.s3-us-west-2.amazonaws.com/Project/${counter + 1}.jpg`;
    const carousel = `https://fecclothes.s3-us-west-2.amazonaws.com/Project/${counter + 1}.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/${random1}.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/${random2}.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/${random3}.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/${random4}.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/${random5}.jpg, `;
    const picker = () => {
      let count = 0;
      let pants = '';
      const shirt = 'Small Medium Large X-Large';
      const pantSize = ['30', '32', '34', '36', '38', '40'];
      while (count < 4) {
        const inseam = Math.floor(Math.random() * 6);
        const waist = Math.floor(Math.random() * 6);
        const pant = (`${pantSize[waist]}x${pantSize[inseam]} `);
        pants += pant;
        count += 1;
      }
      const pick = Math.floor(Math.random() * 2);
      if (pick === 1) {
        return pants;
      }
      return shirt;
    };
    const picked = picker();
    const description = faker.commerce.productDescription();
    Model.sync({ force: true })
      .then(() => (
        Model.create({
          product_name: productName,
          rating,
          ratingsAmt,
          price,
          color,
          description,
          image,
          carousel,
          clothing_sizes: picked,
          count: 1,
        })
      ));
    counter += 1;
  }
};

seed();
