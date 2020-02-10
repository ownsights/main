const makeMongo = require('../database/mongo');
const Logger = require('./Logger');

const logger = new Logger('checkEnvironment');

const checkEnvironment = async () => {
  const mongo = await makeMongo();
  const status = await mongo.getStatus();

  if (!status.ok) {
    logger.warn('Mongo not ready.');

    return false;
  }

  return true;
};

module.exports = checkEnvironment;
