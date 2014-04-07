var test = require('tap').test;
var schema = require('../index.js');

test("stdio array allows nullables", function (t) {
  var x = {
    tasks: [
      {
        exec: 'a',
        args: [],
        envs: {},
        cwd : '/',
        stdio: [null]
      }
    ]
  }
  t.deepEquals(schema.job.marshal(x), x);
  t.end();
})


test("stdio allows object with path", function (t) {
  var x = {
    tasks: [
      {
        exec: 'a',
        args: [],
        envs: {},
        cwd : '/',
        stdio: [{path: '/asdf'}]
      }
    ]
  }
  t.deepEquals(schema.job.marshal(x), x);
  t.end();
})

test("stdio allows file object", function (t) {
  var x = {
    tasks: [
      {
        exec: 'a',
        args: [],
        envs: {},
        cwd : '/',
        stdio: [{mode:'', path: '/asdf'}]
      }
    ]
  }
  t.deepEquals(schema.job.marshal(x), x);
  t.end();
})
