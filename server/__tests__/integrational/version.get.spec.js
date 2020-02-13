const request = require('supertest');
const getServer = require('../../server');

describe('/version', () => {
  describe('GET /version', () => {
    it('should respond with version', async () => {
      const app = await getServer();
      return request(app)
        .get('/version')
        .expect(200)
        .expect((res) => {
          const version = res.body;

          expect(typeof version).toBe('string');
          expect(version.split('.').length === 3).toBe(true);
        });
    });
  });
});
