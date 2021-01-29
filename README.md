# Leeds Feeds 🍽️

[Click here to view hosted API in your browser](https://nba-gm-simulator.herokuapp.com/)

## Packages

- **Express** - web app framework to speed up process of implementing my server-side logic for the API
- **nodemon** - upon file save, nodemon automatically restarts a Node.js app, spinning up the server again
- **Jest & Supertest** - testing of endpoints

## Available endpoints

- ### GET / <br>

  Greeting page with current time displayed and an introductory message

- ### GET /restaurants <br>

  Returns an array of all restaurant objects

- ### GET /restaurants/:id <br>

  Using a parametric endpoint, returns a single restaurant object given the specified id number. <br>
  Example response for GET /restaurants/2 ⬇ <br>

  ```javascript
  {
  "id": 2,
  "name": "Salami & Co",
  "address": "10 Market Place, Otley, Leeds LS21 3AQ England",
  "cuisine": [
    "Cafe",
    "British"
  ],
  "dog-friendly": true,
  "vegan-options": true,
  "rating": 5
  }
  ```

  If that id is non-existent, a 404 is shown with relevant message.
  Example response for GET /restaurants/9999 ⬇

  ```javascript
  {
  "404 error": "Restaurant with id 9999 not found"
  }
  ```

  ### GET /restaurants?dog-friendly=true || /restaurants?dog-friendly=false

  ### GET /restaurants?vegan-options=true || /restaurants?vegan-options=false

  Using a query parameter, returns all restaurants that have a key of dog-friendly/vegan-options and a corresponding value of either true or false.
  Example response for GET /restaurants?dog-friendly=true ⬇

  ```javascript
  [
    {
      id: 2,
      name: 'Salami & Co',
      address: '10 Market Place, Otley, Leeds LS21 3AQ England',
      cuisine: ['Cafe', 'British'],
      'dog-friendly': true,
      'vegan-options': true,
      rating: 5
    },
    {
      id: 3,
      name: 'LS6 Cafe',
      address: '16A Headingley Lane, Leeds LS6 2AS England',
      cuisine: ['British', 'Cafe', 'International'],
      'dog-friendly': true,
      'vegan-options': true,
      rating: 4
    },
    {
      id: 6,
      name: 'The Brunswick',
      address: '82 North Street, Leeds LS2 7PN England',
      cuisine: ['Bar', 'British', 'Pub'],
      'dog-friendly': true,
      'vegan-options': true,
      rating: 4
    }
  ];
  ```
