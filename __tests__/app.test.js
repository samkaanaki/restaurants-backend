const request = require('supertest');
const app = require('../app');

describe('end-point tests', () => {
  describe('/restaurants', () => {
    test('GET returns status 200 and restaurants array', () => {
      return request(app)
        .get('/restaurants')
        .expect(200)
        .then((response) => {
          expect(response.body).toMatchObject(expect.any(Array));
        });
    });
  });
});
