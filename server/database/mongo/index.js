const { MongoClient } = require('mongodb');
const Logger = require('../../helpers/Logger');
const getEnv = require('../../helpers/getEnv');
const logger = new Logger('Mongo');
const Mongo = require('./Mongo');

let database;
const getConnection = async () => {
  try {
    if (database) {
      return database;
    }

    const url = getEnv('MONGO_URL');
    const name = getEnv('MONGO_DBNAME');
    if (!url) {
      throw new Error('Missing MONGO_URL env');
    }

    database = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });

    return await database.db(name);
  } catch (error) {
    logger.error('Error during getting mongo connection.', error);
  }
};



const makeMongo = async () => {
  const db = await getConnection();

  return new Mongo({ db, logger });
};

module.exports = makeMongo;
