// @flow
const http = require('http');
const https = require('https');

function requestWrapper(uri: string): http$ClientRequest<any> {
  const requestHandler = uri.includes('https') ? https : http;

  return requestHandler.get(uri);
}

module.exports = requestWrapper;
