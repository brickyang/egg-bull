[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-bull-queue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-bull-queue
[travis-image]: https://img.shields.io/travis/brickyang/egg-bull.svg?style=flat-square
[travis-url]: https://travis-ci.org/brickyang/egg-bull
[codecov-image]: https://img.shields.io/codecov/c/github/brickyang/egg-bull.svg?style=flat-square
[codecov-url]: https://codecov.io/github/brickyang/egg-bull?branch=master
[david-image]: https://img.shields.io/david/brickyang/egg-bull.svg?style=flat-square
[david-url]: https://david-dm.org/brickyang/egg-bull
[snyk-image]: https://snyk.io/test/npm/egg-bull/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-bull
[download-image]: https://img.shields.io/npm/dm/egg-bull-queue.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-bull-queue

[中文版](https://github.com/brickyang/egg-bull/blob/master/README.zh_CN.md)

Plugin to handle jobs and messages with [Bull](https://github.com/OptimalBits/bull) in Egg.js.

Bull is a fast, reliable, Redis-based queue for Node.

## Install

```bash
$ npm i egg-bull-queue --save
```

For TypeScript users:

```bash
$ npm i @types/bull --save-dev
```



## Usage

```js
// {app_root}/config/plugin.js
exports.bull = {
  enable: true,
  package: 'egg-bull', // notice the name of plugin
};
```

## Configuration

### Single queue

```js
// {app_root}/config/config.default.js
exports.bull = {
  client: {
    name: 'queue',
    redis: {
      host: 'localhost',
      port: 6379,
      db: 0,
    },
  },
};
```

### Multiple queue (recommended)

```js
exports.bull = {
  clients: {
    q1: { name: 'q1' },
    q2: { name: 'q2' },
  },
  default: {
    redis: {
      host: 'localhost',
      port: 6379,
      db: 0,
    },
  },
};
```

## Example

```js
app.bull.process(job => {
  console.log(job.data, job1); // 'this is a job'
});

app.bull.add({ job1: 'this is a job' });
```

For Bull's api read [Reference](https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueclose) for more details.

## License

[MIT](LICENSE)
