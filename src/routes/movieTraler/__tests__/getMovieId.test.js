/* eslint-env jest */
const axios = require('axios');

const getMovieId = require('../getMovieId');

const uri = 'uri-test';

const mockedData = {
  data: {
    _embedded: {
      'viaplay:blocks': [
        {
          _embedded: {
            'viaplay:product': {
              content: {
                imdb: {
                  id: 'test-id',
                },
              },
            },
          },
        },
      ],
    },
  },
};

describe('getMovieId()', () => {
  test('getMovieId is defined', () => {
    expect(getMovieId).toBeDefined();
  });

  test('makes the request with given uri', () => {
    axios.get.mockResolvedValue({});
    getMovieId(uri);
    expect(axios.get).toHaveBeenCalledWith(uri);
  });

  test('returns the movie id', async () => {
    axios.get.mockResolvedValue(mockedData);
    expect(await getMovieId(uri)).toBe('test-id');
  });

  test('returns undefined for invalid data', async () => {
    axios.get.mockResolvedValue({});
    expect(await getMovieId(uri)).toBeUndefined();
  });
});
