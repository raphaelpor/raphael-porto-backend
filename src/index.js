// @flow
const express = require('express');

const config = require('./config')();
const log = require('./helpers/log');
const setupMorgan = require('./helpers/setupMorgan');

const movieTralerRouter = require('./routes/movieTralerRouter');

const app = express();

// Log all requests
app.use(setupMorgan());

// Disable for security reasons
app.disable('x-powered-by');

// Routes
app.get('/healthcheck', (req: any, res: Object): any => res.send('WORKING'));
app.use('/movie-trailer', movieTralerRouter);

// Start server
app.listen(config.port, () => {
  log('server', `Server running at: http://${config.hostName}:${config.port}/`);
});
