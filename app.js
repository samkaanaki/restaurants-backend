const express = require('express');
const app = express();

const data = require('./data/restaurants');
app.use(express.json());

app.get('/restaurants', (req, res) => {
  res.json(data);
});

module.exports = app;
