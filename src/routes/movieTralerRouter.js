// flow
const express = require('express');

const get = require('./movieTraler/get');

const router = express.Router();

router.get('/*', get);

module.exports = router;
