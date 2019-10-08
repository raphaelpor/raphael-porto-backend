// @flow
const express = require('express');

const setupMorgan = require('./helpers/setupMorgan');
const movieTralerRouter = require('./routes/movieTralerRouter');
const startServer = require('./startServer');

const app = express();

// Log all requests
app.use(setupMorgan());

// Disable for security reasons
app.disable('x-powered-by');

// Routes
app.get('/healthcheck', (req: any, res: Object): any => res.send('WORKING'));
app.use('/movie-trailer', movieTralerRouter);

startServer(app);
