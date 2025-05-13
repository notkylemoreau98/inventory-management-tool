const request = require('supertest');
const app = require('../src/index');

describe('GET /api/categories', () => {
  it('should return 200 and an array', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
