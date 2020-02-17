const pkg = require('../package');

const getVersion = async (req, res) => {
  res.send({
    version: pkg.version,
  });
};

module.exports = getVersion;
