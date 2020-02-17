const http = require('http');

const TIMEOUT = 60;
const INTERVAL = 1000;
const TIMEOUT_HUMAN = 'one minute';

const sleep = () => new Promise((resolve) => setTimeout(resolve, INTERVAL));

const tryServer = () => new Promise((resolve, reject) => {
  http.get('http://localhost:3060', resolve)
    .on('error', reject);
});

const loop = async (retry = 0) => {
  if (retry >= TIMEOUT) {
    console.error(`Server is not after ${TIMEOUT_HUMAN}`);
    process.exit(1);
  }

  try {
    await tryServer();
    console.log('Server ready');
    process.exit(0);
  } catch (error) {
    await sleep();
    await loop(retry + 1);
  }
};

loop();
