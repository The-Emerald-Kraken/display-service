/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Model = require('../database/model.js');

const app = express();
const PORT = 3002;
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products/:id', async (req, res) => {
  await Model.findOne({ where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch((err) => { console.log(err); });
});

app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});
