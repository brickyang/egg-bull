'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/bull.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/bull-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should OK', () => {
    assert(app.bull);
  });

  it('should work', done => {
    app.bull.add({ job1: 'this is a job' });
    app.bull.process(job => {
      if (job.data.job1 === 'this is a job') done();
      else done(new Error());
    });
  });
});
