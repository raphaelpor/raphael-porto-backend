// @flow
const axios = require('axios');

async function getMovieId(uri: string): Promise<?string> {
  const response = await axios.get(uri);
  const embedded = response.data?._embedded;
  const viaplayBlocks = embedded && embedded['viaplay:blocks'];
  const embedded2 = viaplayBlocks && viaplayBlocks[0]?._embedded;
  const movieId =
    embedded2 && embedded2?.['viaplay:product']?.content?.imdb?.id;

  return movieId;
}

module.exports = getMovieId;
