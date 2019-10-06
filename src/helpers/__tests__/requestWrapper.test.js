/* eslint-env jest */
const https = require('https');
const http = require('http');

const requestWrapper = require('../requestWrapper');

jest.mock('https', () => ({
  get: jest.fn(),
}));

jest.mock('http', () => ({
  get: jest.fn(),
}));

describe('requestWrapper', () => {
  test('is defined', () => {
    expect(requestWrapper).toBeDefined();
  });

  test('works with https', () => {
    const url = 'https://';
    requestWrapper(url);

    expect(https.get).toHaveBeenCalledTimes(1);
    expect(https.get).toHaveBeenCalledWith(url);
  });

  test('works with http', () => {
    const url = 'http://';
    requestWrapper(url);

    expect(http.get).toHaveBeenCalledTimes(1);
    expect(http.get).toHaveBeenCalledWith(url);
  });
});
