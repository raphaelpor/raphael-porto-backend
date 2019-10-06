// @flow
const express = require('express');

const setupMorgan = require('./helpers/setupMorgan');
const log = require('./helpers/log');
const config = require('./config')();

const app = express();

// Log all requests
app.use(setupMorgan());

app.get('/healthcheck', (req: any, res: Object): any => res.send('WORKING'));

app.disable('x-powered-by');

app.listen(config.port, () => {
  log(
    'server',
    `Server running at: http://${config.hostName}:${config.port}/`,
  );
});
