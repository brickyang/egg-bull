'use strict';

const assert = require('assert');
const Queue = require('bull');

module.exports = app => {
  app.addSingleton('bull', createQueue);
};

function createQueue(config, app) {
  const { name, redis } = config;
  assert(name, '[egg-bull] name is required on config');
  assert(
    redis && redis.host && redis.port,
    '[egg-bull] host and port of redis are required on config'
  );

  const queue = new Queue(name, config);

  app.beforeStart(() => {
    app.coreLogger.info(`[egg-bull] Queue ${name} is OK.`);
  });

  return queue;
}
