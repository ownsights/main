const express = require('express');
const getVersion = require('./controllers/version.get');


const getServer = async () => {
  const app = express();

  app.get('/version', getVersion);

  return app;
};

module.exports = getServer;
