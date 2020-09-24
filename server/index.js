/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});
