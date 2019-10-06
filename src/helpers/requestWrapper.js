// @flow
const http = require('http');
const https = require('https');

function requestWrapper(uri: string) {
  const requestHandler = uri?.includes('https') ? https : http;

  return requestHandler.get(uri);
}

module.exports = requestWrapper;
