const request = require('supertest');
const app = require('../app');

describe('end-point tests', () => {
  describe('/restaurants', () => {
    test('GET - 200 - returns array containing all restaurant objects', () => {
      return request(app)
        .get('/restaurants')
        .expect(200)
        .then((response) => {
          expect(response.body).toMatchObject(expect.any(Array));
          expect(typeof response.body[0]).toBe('object');
        });
    });

    test('GET - 200 - each restaurant object has the appropriate properties', () => {
      return request(app)
        .get('/restaurants')
        .expect(200)
        .then((response) => {
          expect(Object.keys(response.body[0])).toEqual(
            expect.arrayContaining([
              'id',
              'name',
              'address',
              'cuisine',
              'dog-friendly',
              'vegan-options',
              'rating'
            ])
          );
        });
    });
  });

  describe('/restaurants/:id', () => {
    test('GET - 200 - returns a restaurant object when requested that specific id', () => {
      return request(app)
        .get('/restaurants/1')
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual({
            id: 1,
            name: 'Mumtaz',
            address: 'Chadwick Street, 1 & 2 Mackenzie House, Leeds LS10 1PJ',
            cuisine: ['Indian', 'Asian', 'Balti', 'Pakistani'],
            'dog-friendly': false,
            'vegan-options': true,
            rating: 5
          });
        });
    });

    test('GET - 404 - returns Restaurant not found when given a non existent restaurant id', () => {
      return request(app)
        .get('/restaurants/99')
        .expect(404)
        .then((response) => {
          expect(response.body).toEqual({
            error: 'Restaurant not found.'
          });
        });
    });
  });

  describe('/restaurants queries', () => {
    test('GET - 200 - ?vegan-options returns relevant restaurants when given true/false', () => {
      return request(app)
        .get('/restaurants?vegan-options=true')
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual([
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
              id: 5,
              name: 'Viet Guy',
              address: '159 Lower Briggate, Leeds LS1 6LY England',
              cuisine: ['Asian', 'Vietnamese'],
              'dog-friendly': false,
              'vegan-options': true,
              rating: 4.5
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
          ]);
        });
    });
  });
});
