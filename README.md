# lib-proto-job

> json protocol for job declaration

## install

```bash
npm install --save lib-proto-job
```

## usage

```javascript
var proto = require('lib-proto-job');

var job = proto.job.marshal({
  tasks: [
    {exec: 'ls', args: ['-al'], envs: process.env, cwd: process.cwd()}
  ]
});

// job is a validated object
```

## see also

- [lib-job-queue](https://www.npmjs.org/package/lib-job-queue)
- [lib-schema](https://www.npmjs.org/package/lib-schema)
- [lib-marshal](https://www.npmjs.org/package/lib-marshal)
