// var console = 1;
// console.a()
var repl = require("repl");
repl.start({
  useGlobal: true
});

// global.console
// https://github.com/nodejs/node/blob/v0.12.7/src/node.js#L213

// var console is local to the module, since they will be wrapped
// http://fredkschott.com/post/2014/06/require-and-the-module-system/
// https://github.com/nodejs/node/blob/v0.12.7/lib/module.js#L443

// in REPL
// https://github.com/nodejs/node/blob/v0.12.7/lib/repl.js#L132
// when useGlobal is true(what happens when you run `node`), the script won't have its own context
// when useGlobal is false, `console` will be local to the script, so it can be modified

// https://github.com/nodejs/node/blob/v0.12.7/lib/vm.js
//https://github.com/nodejs/node/blob/b244f139bf4bf241178de5d9e0ce9afb7148e861/src/node_contextify.cc#L536