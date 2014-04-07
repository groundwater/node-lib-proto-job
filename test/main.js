var test = require('tap').test;
var schema = require('../index.js');

test(function (t) {
  var x = {
    tasks: [
      {
        exec: 'a',
        args: [],
        envs: {},
        cwd : '/',
      }
    ]
  }
  t.deepEquals(schema.job.marshal(x), x);
  t.end();
})
