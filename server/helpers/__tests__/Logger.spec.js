const Logger = require('../Logger');

describe('helpers: Logger', () => {
  let instance;

  it('should create instance', () => {
    instance = new Logger('test-namespace');
    expect(typeof instance).toBe('object')

    // Prevent logging to console during test.
    instance.console = {
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
  });

  ['log', 'warn', 'error'].forEach((method) => {
    describe(`method: ${method}`, () => {
      it('should be a function', () => {
        expect(typeof instance[method]).toBe('function');
      });

      it('should log to console', () => {
        instance[method]('Test');
        expect(instance.console[method]).toHaveBeenCalledWith('Test');
      });
    })
  })
});
