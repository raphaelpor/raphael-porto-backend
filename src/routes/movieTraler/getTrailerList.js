// @flow
const axios = require('axios');

const config = require('../../config')();

type ItemType = { key: string };

const filter = (item: ItemType): boolean => Boolean(item?.key);

const mapper = (item: ItemType): ?string =>
  item?.key ? config.youtubeUri + item.key : null;

async function getTrailerList(id: string): Promise<?Array<string>> {
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
