// @flow
const axios = require('axios');

const config = require('../../config')();

type ItemType = { key: string };

const API_KEY = 'd9bacbdc47c8ef0f48ca0d4ac8059d2a';

const getTmdbUri = id =>
  `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

const filter = (item: ItemType): boolean => Boolean(item?.key);

const mapper = (item: ItemType): string => config.youtubeUri + item.key;

async function getTrailerList(id: string): Promise<?Array<string>> {
  try {
    const response = await axios.get(getTmdbUri(id));
    const results = response.data?.results;

    if (results) {
      return results.filter(filter).map(mapper);
    }

    return null;
  } catch (e) {
    return null;
  }
}

module.exports = {
  getTrailerList,
  filter,
  mapper,
};
