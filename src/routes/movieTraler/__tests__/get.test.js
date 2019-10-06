/* eslint-env jest */
const get = require('../get');

describe('movie-trailer/ get()', () => {
  test('get is defined', () => {
    expect(get).toBeDefined();
  });
});

describe('movie-trailer/ error', () => {
  const request = {
    params: [],
  };
  const response = {
    send: jest.fn(),
    sendStatus: jest.fn(),
  };

  test('returns error if don\'t have a parameter', () => {
    get(request, response);

    expect(response.sendStatus).toHaveBeenCalledTimes(1);
    expect(response.sendStatus).toHaveBeenCalledWith(400);
  });

  test('returns error if don\'t have a valid parameter', () => {
    request.params = ['error-test']
    get(request, response);

    expect(response.sendStatus).toHaveBeenCalledTimes(2);
    expect(response.sendStatus).toHaveBeenCalledWith(400);
  });
});

describe('movie-trailer/ success', () => {
  const request = {
    params: ['https://content.viaplay.se/pc-se/film/arrival-2016'],
  };
  const response = {
    send: jest.fn(),
    sendStatus: jest.fn(),
  };

  beforeEach(async () => {
    get(request, response);
  });

  test('returns "Working"',() => {
    expect(response.send).toHaveBeenCalledWith('WORKING');
  });
});

describe('movie-trailer/ request error', () => {
  const request = {
    params: ['https://content.viaplay.se/pc-se/film/arrival-2016'],
  };
  const response = {
    send: jest.fn(() => { throw new Error(); }), // it simulate a request error for now
    sendStatus: jest.fn(),
  };

  beforeEach(async () => {
    get(request, response);
  });

  test('returns error 500',() => {
    expect(response.sendStatus).toHaveBeenCalledWith(500);
  });
});
