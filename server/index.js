const express = require('express');
const pkg = require('./package');
const getEnv = require('./helpers/getEnv');
const Logger = require('./helpers/Logger');
const checkEnv = require('./helpers/checkEnvironment');
const logger = new Logger('Main');
const versionIndex = require('./controllers/version.index');

const preCheck = async (retryNumber = 0) => {
  const result = await checkEnv();

  if (result === false) {
    logger.warn('Pre check failed. Retrying in 1 second');
    await preCheck(retryNumber + 1);
  }

  logger.log('Pre check success');

  return true;
}

const main = async () => {
  await preCheck();
  const app = express();

  app.get('/version', versionIndex);

  const port = getEnv('SERVER_PORT');
  app.listen(port, (err) => {
    if (err) {
      logger.error('Could not start server.', err);

      process.exit(1);
    }

    logger.log(`Server listening on ${port}`);
  });
};

main();
