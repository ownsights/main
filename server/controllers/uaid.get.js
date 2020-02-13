const crypto = require('crypto');

const getUAID = async (req, res) => {
  // TODO check for X-FORWARDED

  const hostPart = req.headers.host;
  const ua = req.headers['user-agent'];
  const time = Date.now();
  const rand = Math.random();

  const hash = crypto
    .createHash('sha256')
    .update(`${hostPart}${ua}${time}${time}${rand}`)
    .digest('hex');

  res.status(200).send({
    uaid: hash,
  });
};

module.exports = getUAID;
