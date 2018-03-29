'use strict';

exports.keys = '123456';

exports.bull = {
  clients: {
    q1: { name: 'q1' },
    q2: { name: 'q2' },
  },
  default: {
    redis: {
      host: 'localhost',
      port: '6379',
      db: 0,
    },
  },
};
