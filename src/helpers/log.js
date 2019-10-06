// @flow
/* eslint-disable no-console */

const log = (nameSpace: string, ...args: Array<any>) => {
  console.log('\x1b[33m%s\x1b[0m', `>>> ${nameSpace}: `, ...args);
};

module.exports = log;
