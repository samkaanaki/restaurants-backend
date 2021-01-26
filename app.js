const express = require('express');
const app = express();
const data = require('./data/restaurants');
app.use(express.json());

// GET request for all restaurants
app.get('/restaurants', (req, res) => {
  if (req.query === { 'vegan-options': true }) {
    const hasVeganOptions = data.filter((restaurant) => {
      restaurant['vegan-options'] === true;
      return hasVeganOptions;
    });
    console.log(hasVeganOptions);
    res.status(200).send(hasVeganOptions);
  } else {
    res.status(200).send(data);
  }
});

// GET request for specific restaurant object given a restaurant id
app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  if (restaurantId > data.length) {
    res.status(404).send({ error: 'Restaurant not found.' });
  } else {
    res.status(200).send(data[restaurantId - 1]);
  }
});

// GET request for vegan-options query
app.get('/restaurants?vegan-options=true', (req, res) => {
  res.status(200).send(hasVeganOptions);
});

module.exports = app;
