const Logger = jest.requireActual('../Logger');

class MockedLogger extends Logger {
  constructor(namespace) {
    super(namespace);
    this.mockNamespace = namespace;
    this.console = {
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      trace: jest.fn(),
    };
  }
}

module.exports = MockedLogger;
