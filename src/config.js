const API_KEY = 'd9bacbdc47c8ef0f48ca0d4ac8059d2a';

const config = () => ({
  hostName: process.env.HOSTNAME || 'localhost',
  ambient: process.env.NODE_ENV || 'local',
  port: process.env.PORT || '8888',
  getTmdbUri: id =>
    `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
  youtubeUri: 'https://www.youtube.com/watch?v=',
});

module.exports = config;
