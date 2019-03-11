'use strict';

const assert = require('assert');

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

  const Queue = app.config.bull.Bull || require('bull');
  const queue = new Queue(name, config);

  /* istanbul ignore next */
  queue.on('error', error => {
    app.coreLogger.error(error);
    process.exit(1);
  });

  app.beforeStart(() => {
    app.coreLogger.info(`[egg-bull] Queue ${name} is OK.`);
  });

  return queue;
}
