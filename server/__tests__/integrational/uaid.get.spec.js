const request = require('supertest');
const getServer = require('../../server');

describe('/uaid', () => {
  describe('GET /uaid', () => {
    let app;
    let firstuaid;

    it('should create server', async () => {
      app = await getServer();
    });

    it('should return user agent identifier', async () => {
      await request(app)
        .get('/uaid')
        .expect((res) => {
          const { uaid } = res.body;
          firstuaid = uaid;
          expect(typeof uaid).toBe('string');
        });
    });

    it('should return new user agent identifier on a second call', async () => {
      await request(app)
        .get('/uaid')
        .expect((res) => {
          const { uaid } = res.body;

          expect(typeof uaid).toBe('string');
          expect(uaid).not.toBe(firstuaid);
        });
    });
  });
});
