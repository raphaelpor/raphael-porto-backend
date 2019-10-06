/* eslint-env jest */
const log = require('../log');

global.console = { log: jest.fn() };

describe('log', () => {
  test('is defined', () => {
    expect(log).toBeDefined();
  });

  test('calls console.log', () => {
    log('test', 'message');
    const argument1 = '\x1b[33m%s\x1b[0m';
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(argument1, '>>> test: ', 'message');
  });
});
