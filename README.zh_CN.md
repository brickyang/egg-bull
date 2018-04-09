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

[English](https://github.com/brickyang/egg-bull/blob/master/README.md)

[Bull](https://github.com/OptimalBits/bull) 是一个快速的，可靠的，基于 Redis 的 Node.js 队列服务。

## 安装

```bash
$ npm i egg-bull-queue --save
```

如果你使用 TypeScript：

```bash
$ npm i @types/bull --save-dev
```

## 使用

```js
// {app_root}/config/plugin.js
exports.bull = {  // 插件名称是 'bull'
  enable: true,
  package: 'egg-bull-queue', // 包名称是 'egg-bull-queue'
};
```

## 配置

### 单一队列

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

### 多队列（推荐）

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

## 用例

```js
app.bull.process(job => {
  console.log(job.data, job1); // 'this is a job'
});

app.bull.add({ job1: 'this is a job' });
```

关于 Bull 的 API 和使用请阅读 [Reference](https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueclose)。

## License

[MIT](LICENSE)
