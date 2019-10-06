// @flow
const morgan = require('morgan');

function setupMorgan(): any {
  let morganFormat =
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status ';
  morganFormat +=
    '"content-length" :res[content-length] ":referrer" ":user-agent"  - :response-time ms';
  return morgan(morganFormat);
}

module.exports = setupMorgan;
