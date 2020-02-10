const checkEnvironment = require('../checkEnvironment');

jest.mock('../Logger');
let mockedMongoStatus = true;
jest.mock('../../database/mongo', () => async () => ({
   getStatus: async () => ({
     ok: mockedMongoStatus,
   }),
}));

describe('helpers: checkEnvironment', () => {
  it('return true when all is ok', async () => {
    expect(await checkEnvironment()).toBe(true);
  });

  it('should return false when mongo is not ok', async () => {
    mockedMongoStatus = false;
    expect(await checkEnvironment()).toBe(false);
  });
});
