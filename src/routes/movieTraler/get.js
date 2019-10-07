// @flow
const log = require('../../helpers/log');

const getImdbUri = require('./getImdbUri');

const LOG_TAG = 'movie-trailer get';
const BASE_URL = 'content.viaplay.se';

type RequestType = {
  params: Array<?string>,
};

type ResponseType = {
  send: Function,
  json: Function,
  sendStatus: Function,
};

const get = async (req: RequestType, res: ResponseType) => {
  const parameter = req.params[0];

  if (!parameter) {
    log(LOG_TAG, '400 - Parameter not found');
    res.sendStatus(400);
    return;
  }

  if (!parameter.includes(BASE_URL)) {
    log(LOG_TAG, '400 - Parameter not valid');
    res.sendStatus(400);
    return;
  }

  try {
    const imdbUri = await getImdbUri(parameter);

    if (!imdbUri) {
      log(LOG_TAG, '404 - Not Found');
      res.sendStatus(404);
      return;
    }

    res.json(imdbUri);
    log(LOG_TAG, `${imdbUri} > 200 - Request OK.`);
  } catch (error) {
    res.sendStatus(500);
    log(LOG_TAG, error);
  }
};

module.exports = get;
