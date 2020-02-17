const express = require('express');
const getVersion = require('./controllers/version.get');
const getUAID = require('./controllers/uaid.get');

const getServer = async () => {
  const app = express();

  app.get('/version', getVersion);
  app.get('/uaid', getUAID);

  return app;
};

module.exports = getServer;
