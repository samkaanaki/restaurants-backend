const { query } = require('express');
const express = require('express');
const app = express();
const data = require('./data/restaurants');
app.use(express.json());

// GET request for all restaurants with ability to filter by vegan-options and/or dog-friendly queries
app.get('/restaurants', (req, res) => {
  let filtered = data;

  if (req.query['vegan-options']) {
    const veganOnly = req.query['vegan-options'] === 'true';
    filtered = filtered.filter((restaurant) => {
      return restaurant['vegan-options'] === veganOnly;
    });
  }

  if (req.query['dog-friendly']) {
    const dogOnly = req.query['dog-friendly'] === 'true';
    filtered = filtered.filter((restaurant) => {
      return restaurant['dog-friendly'] === dogOnly;
    });
  }

  res.status(200).send(filtered);
});

// GET request for specific restaurant object given a restaurant id
app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  if (restaurantId > data.length) {
    res
      .status(404)
      .send({ '404 error': `Restaurant with id ${restaurantId} not found` });
  } else {
    res.status(200).send(data[restaurantId - 1]);
  }
});

module.exports = app;
