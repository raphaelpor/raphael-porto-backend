// @flow
const axios = require('axios');

async function getImdbUri(uri: string): Promise<?string> {
  const response = await axios.get(uri);
  const embedded = response.data?._embedded;
  const viaplayBlocks = embedded && embedded['viaplay:blocks'];
  const embedded2 = viaplayBlocks && viaplayBlocks[0]?._embedded;
  const imdbUri =
    embedded2 && embedded2?.['viaplay:product']?.content?.imdb?.url;

  return imdbUri;
}

module.exports = getImdbUri;
