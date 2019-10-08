// @flow
const axios = require('axios');

const config = require('../../config')();

type ItemType = { key: string };

const filter = (item: ItemType): boolean => Boolean(item?.key);

const mapper = (item: ItemType): string => config.youtubeUri + item.key;

async function getTrailerList(id: string): Promise<?Array<string>> {
  try {
    const response = await axios.get(config.getTmdbUri(id));
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
