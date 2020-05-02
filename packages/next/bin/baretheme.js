#!/usr/bin/env node
const meow = require('meow');

const cli = meow(`
Usage
  $ baretheme <command>

Input
  dev
  start
  build

Flags
  hostname --hostname
  port --port
  help --help
  version --version

For more information run a command with the --help flag
  $ baretheme build --help
`, {
  input: ['dev', 'build', 'start'],
  flags: {
    port: {
      type: 'number',
      default: 3000,
      alias: 'p',
    },
    hostname: {
      type: 'string',
      default: 'localhost',
      aslias: 'H',
    },
  },
});

require('../cli/cli.js')(cli);
