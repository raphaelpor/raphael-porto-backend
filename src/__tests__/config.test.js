/* eslint-env jest */
const config = require('../config');

describe('config', () => {
  test('is defined', () => {
    expect(config).toBeDefined();
  });

  test('returns the local configuration', () => {
    process.env.NODE_ENV = '';
    const { ambient, hostName, port, youtubeUri } = config();
    expect(ambient).toBe('local');
    expect(hostName).toBe('localhost');
    expect(port).toBe('8888');
    expect(youtubeUri).toBe('https://www.youtube.com/watch?v=');
  });

  test('returns the server configuration', () => {
    process.env = {
      NODE_ENV: 'production',
      HOSTNAME: 'test.server',
      PORT: '5000',
    };
    const { ambient, hostName, port } = config();
    expect(ambient).toBe('production');
    expect(hostName).toBe('test.server');
    expect(port).toBe('5000');
  });

  test('returns the server configuration', () => {
    expect(config().getTmdbUri('test-id')).toBe(
      'http://api.themoviedb.org/3/movie/test-id/videos?api_key=d9bacbdc47c8ef0f48ca0d4ac8059d2a'
    );
  });
});
