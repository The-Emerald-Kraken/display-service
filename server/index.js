/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;
const PUBLIC_DIR = '../public';

app.use(express.static(PUBLIC_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('api/id', (req, res) =>{

});

app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});
