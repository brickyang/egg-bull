'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/multi-client.test.js', () => {
  let app;
  before(() => {
    app = mock.app({ baseDir: 'apps/multi-client-test' });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should OK', () => {
    assert(app.bull.get('q1'));
  });

  it('should work', done => {
    app.bull.get('q1').add({ job1: 'this is a job' });
    app.bull.get('q1').process(job => {
      if (job.data.job1 === 'this is a job') done();
      else done(new Error());
    });
  });
});
