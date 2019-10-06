// @flow
const express = require('express');

const setupMorgan = require('./helpers/setupMorgan');
const config = require('./config')();

const app = express();

// Log all requests
app.use(setupMorgan());

app.get('/healthcheck', (req: any, res: Object): any => res.send('WORKING'));

app.disable('x-powered-by');

app.listen(config.port, () => {
  console.log(
    'server',
    `Server running at: http://${config.hostName}:${config.port}/`,
  );
});
