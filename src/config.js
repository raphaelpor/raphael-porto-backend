const config = () => ({
  hostName: process.env.HOSTNAME || 'localhost',
  ambient: process.env.NODE_ENV || 'local',
  port: process.env.PORT || '8888',
});

module.exports = config;
