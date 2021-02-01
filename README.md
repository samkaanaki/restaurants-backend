# Leeds Feeds 🍽️

## Getting Started

[Click here to view hosted API in your browser](https://leeds-feeds-backend.herokuapp.com/) <br>
It is recommended that you open this in a new tab so you can continue to read on and have the available endpoints up while you interact with the API.

Alternatively:

1. For and clone this repo onto your local machine
2. Using the terminal, `cd restaurants-backend` to change directory
3. Run `npm install` to install dependencies
4. Run `npm start` and app will launch on port 9000
5. Run `http://localhost:9000` in your browser or HTTP/API Client (I used Insomnia. Postman is also very popular) of choice
6. Test the endpoints below and enjoy!

## Packages used

- **Express** - web app framework to speed up process of implementing my server-side logic for the API
- **nodemon** - upon file save, nodemon automatically restarts a Node.js app, spinning up the server again
- **Jest & Supertest** - testing of endpoints

## Available endpoints

- ### GET / <br>

  Greeting page with an introductory message <br><br>

- ### GET /restaurants <br>

  Returns an array of all restaurant objects<br><br>

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

  If that id is non-existent, a 404 is shown with relevant message. <br>
  Example response for GET /restaurants/9999 ⬇

  ```javascript
  {
    "404 error": "Restaurant with id 9999 not found"
  }
  ```

<br>

- ### GET /restaurants?dog-friendly=true || /restaurants?dog-friendly=false
  or
- ### GET /restaurants?vegan-options=true || /restaurants?vegan-options=false

  Using a query parameter, returns all restaurants that have a key of dog-friendly/vegan-options and a corresponding value of either true or false. <br>
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

<br>

- ### GET /restaurants?vegan-options=true&dog-friendly=false
  Combining query parameters, user can show any combination of restaurants that are vegan and/or dog friendly. <br>
  Example response for GET /restaurants?vegan-options=true&dog-friendly=false ⬇
  ```javascript
  [
    {
      id: 1,
      name: 'Mumtaz',
      address: 'Chadwick Street, 1 & 2 Mackenzie House, Leeds LS10 1PJ',
      cuisine: ['Indian', 'Asian', 'Balti', 'Pakistani'],
      'dog-friendly': false,
      'vegan-options': true,
      rating: 5
    },
    {
      id: 5,
      name: 'Viet Guy',
      address: '159 Lower Briggate, Leeds LS1 6LY England',
      cuisine: ['Asian', 'Vietnamese'],
      'dog-friendly': false,
      'vegan-options': true,
      rating: 4.5
    }
  ];
  ```
  <br>
- ### GET /restaurants?cuisine=cafe
  Query parameter allowing user to filter restaurants by cuisine type. <br>
  Example response for GET /restaurants?cuisine=cafe ⬇
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
    }
  ];
  ```
