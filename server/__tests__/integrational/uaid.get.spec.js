const request = require('supertest');
const getServer = require('../../server');

describe('/uaid', () => {
  describe('GET /uaid', () => {
    it('should return user agent identifier', async () => {
      const app = await getServer();

      await request(app)
        .get('/uaid')
        .expect((res) => {
          console.warn(res.body);
        });
    });
  });
});
