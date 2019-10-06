/* eslint-env jest */
const morgan = require('morgan');

const setupMorgan = require('../setupMorgan');

describe('setupMorgan()', () => {
  test('is defined', () => {
    expect(setupMorgan).toBeDefined();
  });

  test('calls Morgan with the right parameters',() => {
    setupMorgan();

    const expected = ':remote-addr - :remote-user [:date[clf]] \":method :url HTTP/:http-version\" :status \"content-length\" :res[content-length] \":referrer\" \":user-agent\"  - :response-time ms';
    expect(morgan).toHaveBeenCalled();
    expect(morgan).toHaveBeenCalledTimes(1);
    expect(morgan).toHaveBeenCalledWith(expected);
  });
});
