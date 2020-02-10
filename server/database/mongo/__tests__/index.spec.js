const { MongoClient } = require('mongodb');
const makeMongo = require('../index');

jest.mock('../../../helpers/getEnv', () => (name) => name);
jest.mock('../../../helpers/Logger');

jest.mock('mongodb', () => {
  const mockDBSpy = jest.fn();
  return {
    MongoClient: {
      mockDBSpy,
      connect: jest.fn().mockReturnValue(
        new Promise(resolve => resolve({
          db: async (...args) => {
            mockDBSpy(...args);

            return {};
          },
        }))
      )
    }
  };
});

describe('database: mongo', () => {
  describe('.getConnection', () => {
    let db;
    it('should create new connection', async () => {
      db = await makeMongo();

      expect(typeof db).toBe('object');
      expect(MongoClient.connect).toHaveBeenCalledWith('MONGO_URL', {
        useUnifiedTopology: true,
      });
      expect(MongoClient.mockDBSpy).toHaveBeenCalledWith('MONGO_DBNAME');
    });

    it('should return singleton', async () => {
      const db1 = await makeMongo();
      expect(db).toStrictEqual(db1);
    });
  });
});
