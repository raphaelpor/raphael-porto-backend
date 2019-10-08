/* eslint-env jest */
const get = require('../get');
const getMovieId = require('../getMovieId');
const getTrailerList = require('../getTrailerList');

jest.mock('../getMovieId');
jest.mock('../getTrailerList');

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
    sendStatus: jest.fn(),
  };

  test("returns error if don't have a parameter", () => {
    get(request, response);

    expect(response.sendStatus).toHaveBeenCalledTimes(1);
    expect(response.sendStatus).toHaveBeenCalledWith(400);
  });

  test("returns error if don't have a valid parameter", () => {
    request.params = ['error-test'];
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
    json: jest.fn(),
  };
  getMovieId.mockResolvedValue('test-id');
  getTrailerList.mockResolvedValue([]);

  beforeEach(async () => {
    get(request, response);
  });

  test('calls getMovieId() with the parameter received', () => {
    expect(getMovieId).toHaveBeenCalledWith(request.params[0]);
  });

  test('calls getTrailerList() with the movie id', () => {
    expect(getTrailerList).toHaveBeenCalledWith('test-id');
  });

  test('calls response.json() the final data', () => {
    // eslint-disable-next-line
    expect(response.json).toHaveBeenCalledWith({"trailers": []});
  });
});

describe('movie-trailer/ request error', () => {
  const request = {
    params: ['https://content.viaplay.se/pc-se/film/arrival-2016'],
  };
  const response = {
    json: jest.fn(),
    sendStatus: jest.fn(),
  };

  test('returns error 404 when do not have a id', async () => {
    getMovieId.mockResolvedValue();
    await get(request, response);
    expect(response.sendStatus).toHaveBeenCalledWith(404);
  });

  test('returns error 404 when do not have trailers', async () => {
    getMovieId.mockResolvedValue('test-id');
    getTrailerList.mockResolvedValue();
    await get(request, response);
    expect(response.sendStatus).toHaveBeenCalledWith(404);
  });

  test('returns error 500', async () => {
    getMovieId.mockResolvedValue('test-id');
    getTrailerList.mockResolvedValue([]);
    response.json = jest.fn(() => {
      throw new Error(); // simulate a parse error
    });
    await get(request, response);
    expect(response.sendStatus).toHaveBeenCalledWith(500);
  });
});
