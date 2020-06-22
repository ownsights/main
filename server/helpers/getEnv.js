const { env } = process;

const getEnv = (name) => {
  const value = env[name];

  return value;
};

module.exports = getEnv;
