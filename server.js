require('dotenv').config();
require('./lib/utils/connect')();

// const express = require('express');
const app = require('./lib/app');
const { UI } = require('bull-board');

const PORT = process.env.PORT || 7890;

app.use('/', UI);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
