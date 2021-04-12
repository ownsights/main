const http = require('http');

const TIMEOUT = 120;
const INTERVAL = 1000;
const TIMEOUT_HUMAN = 'two minutes';

const sleep = () => new Promise((resolve) => setTimeout(resolve, INTERVAL));

const tryServer = () => new Promise((resolve, reject) => {
  http.get('http://localhost:3060', resolve)
    .on('error', reject);
});

console.time('Total time');

const loop = async (retry = 0) => {
  if (retry >= TIMEOUT) {
    console.error(`Server is not up after ${TIMEOUT_HUMAN}`);
    process.exit(1);
  }

  try {
    await tryServer();
    console.log('Server ready');
    console.timeEnd('Total time');
    process.exit(0);
  } catch (error) {
    console.log('Server not up, error is', error);
    await sleep();
    await loop(retry + 1);
  }
};

loop();
