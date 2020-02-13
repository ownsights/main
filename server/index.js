const getEnv = require('./helpers/getEnv');
const Logger = require('./helpers/Logger');
const getServer = require('./server');
const checkEnv = require('./helpers/checkEnvironment');

const logger = new Logger('Main');

const preCheck = async (retryNumber = 0) => {
  const result = await checkEnv();

  if (result === false) {
    logger.warn('Pre check failed. Retrying in 1 second');
    await preCheck(retryNumber + 1);
  }

  logger.log('Pre check success');

  return true;
};

const main = async () => {
  await preCheck();

  const app = await getServer();

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
