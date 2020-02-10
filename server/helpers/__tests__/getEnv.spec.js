const getEnv = require('../getEnv');

describe('helpers: getEnv', () => {
  it('should return a value from env', () => {
    expect(typeof getEnv('NODE_ENV')).toBe('string');
  });

  it('should return undefined', () => {
    expect(typeof getEnv('NOT_EXISTS')).toBe('undefined');
  });
});
