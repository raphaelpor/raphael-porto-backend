const config = () => ({
  hostName: process.env.HOSTNAME || 'localhost',
  ambient: process.env.NODE_ENV || 'local',
  port: process.env.PORT || '8888',
  getTmdbUri: id =>
    `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`,
  youtubeUri: 'https://www.youtube.com/watch?v=',
});

module.exports = config;
