const express = require('express');
const app = express();
const { UI } = require('bull-board');

app.use(express.json());
app.use('/', UI);

// app.use('/api/v1/RESOURCE', require('./routes/RESOURCE'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
