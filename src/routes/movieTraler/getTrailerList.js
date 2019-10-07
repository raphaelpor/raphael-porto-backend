// @flow
const axios = require('axios');

const config = require('../../config')();

type ItemType = { key: string };

const YOUTUBE_URI = 'https://www.youtube.com/watch?v=';

const filter = (item: ItemType): boolean => Boolean(item?.key);

const mapper = (item: ItemType): ?string =>
  item?.key ? YOUTUBE_URI + item.key : null;

async function getTrailerList(id: string): Promise<?Array<string>> {
  // TODO: Move URI to another file
  const response = await axios.get(config.getTmdbUri(id));
  const results = response.data?.results;

  if (results) {
    return results.filter(filter).map(mapper);
  }

  return null;
}

exports.filter = filter;
exports.mapper = mapper;

module.exports = getTrailerList;
