const express = require('express');
const restaurants = require('./data/restaurants');
const app = express();
const data = require('./data/restaurants');
app.use(express.json());

// GET request for all restaurants
app.get('/restaurants', (req, res) => {
  res.status(200).send(data);
});

// GET request for specific restaurant object given a restaurant id
app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  if (restaurantId > data.length) {
    res.status(404).send({ 'invalid id': 'Restaurant not found.' });
  } else {
    res.status(200).send(data[restaurantId - 1]);
  }
});

module.exports = app;
