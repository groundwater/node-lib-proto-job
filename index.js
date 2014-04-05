var generate = require('lib-schema');

var schema = {
  args: {type: "array" , kind: "string"},
  envs: {type: "map"   , kind: "string"},
  task: {type: "struct", props: {
      exec : "string",
      args : "args",
      cwd  : "string",
      uid  : "string",
      gid  : "string",
      envs : "envs"
    }, require: ["exec", "args", "cwd", "envs"]
  },
  tasks: {type: "array" , kind: "task"},
  job  : {type: "struct", props: {
      tasks: "tasks"
    }, require: ["tasks"]
  }
};

module.exports = generate(schema);
