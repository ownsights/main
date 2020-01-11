const TaggedConsole = require('tagged-console').default;

class Logger {
  constructor(namespace) {
    this.console = new TaggedConsole(namespace);
  }

  doLog(level, msg, ...rest) {
    this.console[level](msg, ...rest);
  }

  log(...args) {
    this.doLog('log', ...args);
  }

  warn(...args) {
    this.doLog('warn', ...args);
  }

  error(...args) {
    this.doLog('error', ...args);
  }
}

module.exports = Logger;
