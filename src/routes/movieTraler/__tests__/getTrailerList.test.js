/* eslint-env jest */
const axios = require('axios');

const getTrailerList = require('../getTrailerList').getTrailerList;
const mapper = require('../getTrailerList').mapper;
const filter = require('../getTrailerList').filter;

describe('getTrailerList.js', () => {
  test('getTrailerList is defined', () => {
    expect(getTrailerList).toBeDefined();
  });

  test('mapper is defined', () => {
    expect(mapper).toBeDefined();
  });

  test('filter is defined', () => {
    expect(filter).toBeDefined();
  });

  describe('mapper()', () => {
    test('returns the youtube uri with the key', () => {
      expect(mapper({ key: 'test-key' })).toBe(
        'https://www.youtube.com/watch?v=test-key'
      );
    });
  });

  describe('filter()', () => {
    test('returns false when does not have a key', () => {
      expect(filter({})).toBe(false);
    });

    test('returns true when have a key', () => {
      expect(filter({ key: 'test-key' })).toBe(true);
    });
  });

  describe('getTrailerList()', () => {
    const id = 'test-id';

    test('makes the request with given id', () => {
      getTrailerList(id);
      expect(axios.get).toHaveBeenCalledWith(
        'http://api.themoviedb.org/3/movie/test-id/videos?api_key=d9bacbdc47c8ef0f48ca0d4ac8059d2a'
      );
    });

    test('returns a list of trailers', async () => {
      axios.get.mockResolvedValue({
        data: {
          results: [{ key: 'test-key' }],
        },
      });
      // eslint-disable-next-line
      expect(await getTrailerList(id)).toStrictEqual(["https://www.youtube.com/watch?v=test-key"]);
    });

    test('returns null for invalid api response', async () => {
      axios.get.mockResolvedValue({});
      expect(await getTrailerList(id)).toBeNull();
    });
  });
});
