// @flow
const express = require('express');

const config = require('./config')();

const app = express();

app.get('/healthcheck', (req: any, res: Object): any => res.send('WORKING'));

app.disable('x-powered-by');

app.listen(config.port, () => {
  console.log(
    'server',
    `Server running at: http://${config.hostName}:${config.port}/`,
  );
});
