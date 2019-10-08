// @flow
const config = require('./config')();
const log = require('./helpers/log');

function startServer(app: { listen: Function }) {
  if (!process.env.API_KEY) {
    log('server', 'Please, configure an API_KEY on process.env before start.');
    return;
  }

  // Start server
  app.listen(config.port, () => {
    log(
      'server',
      `Server running at: http://${config.hostName}:${config.port}/`
    );
  });
}

module.exports = startServer;
