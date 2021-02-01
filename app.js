const express = require('express');
const app = express();
const data = require('./data/restaurants');

app.use(express.json());

// GET request at / - greeting!
app.get('/', (req, res) => {
  const current = new Date();
  let mins = current.getMinutes();

  if (mins < 10) {
    mins = `0${mins}`;
  }
  const greeting = `Welcome to the Leeds Feeds API. It's currently ${current.getHours()}:${mins} which means my newborn daughter, Willow, is either crying, screaming or crying. HOW DO I STOP IT?`;
  res.status(200).send(greeting);
});

// GET request for all restaurants with ability to filter by vegan-options and/or dog-friendly queries
app.get('/restaurants', (req, res) => {
  let filteredRestaurants = data;

  // filter by vegan options
  if (req.query['vegan-options']) {
    const veganOptions = req.query['vegan-options'] === 'true';
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant['vegan-options'] === veganOptions;
    });
  }

  // filter by dog friendly
  if (req.query['dog-friendly']) {
    const dogFriendly = req.query['dog-friendly'] === 'true';
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant['dog-friendly'] === dogFriendly;
    });
  }

  // filter by type of cuisine
  if (req.query.cuisine) {
    filteredRestaurants = [];
    for (const restaurant of data) {
      // map iterates over list of cuisines and converts all to lowercase to match query in URL bar
      restaurant.cuisine.map((cuisineType) => {
        const lowerCaseCuisines = cuisineType.toLowerCase();

        if (lowerCaseCuisines.includes(req.query.cuisine)) {
          filteredRestaurants.push(restaurant);
        }
      });
    }
  }
  res.status(200).send(filteredRestaurants);
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
