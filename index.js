var generate = require('lib-schema');

var schema = {
  args: {type: 'array' , kind: 'string'},
  envs: {type: 'map'   , kind: 'string'},
  file: {type: 'struct', props: {
      mode: 'string',
      path: 'string',
    }, require: ['path']
  },
  fd: {type: 'nullable', kind: 'file'},
  io  : {type: 'array' , kind: 'fd'},
  task: {type: 'struct', props: {
      exec : 'string',
      args : 'args',
      cwd  : 'string',
      uid  : 'string',
      gid  : 'string',
      envs : 'envs',
      stdio: 'io',
    }, require: ['exec', 'args', 'cwd', 'envs']
  },
  tasks: {type: 'array' , kind: 'task'},
  job  : {type: 'struct', props: {
      tasks: 'tasks'
    }, require: ['tasks']
  }
};

module.exports = generate(schema);
