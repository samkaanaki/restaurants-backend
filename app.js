const express = require('express');
const app = express();
const data = require('./data/restaurants');
app.use(express.json());

// GET request for all restaurants
app.get('/restaurants', (req, res) => {
  res.json(data);
});

// GET request for specific restaurant object given a restaurant id
app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  if (restaurantId > data.length) {
    res.json(`404 - restaurant with id ${restaurantId} not found`);
  } else {
    res.json(data[restaurantId - 1]);
  }
});

module.exports = app;
