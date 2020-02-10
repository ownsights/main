const pkg = require('../package');

module.exports = async (req, res) => {
  res.send({
    version: pkg.version,
  });
}
