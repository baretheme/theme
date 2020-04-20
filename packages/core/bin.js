#!/usr/bin/env node
const meow = require('meow');

const cli = meow(`
Usage
  $ baretheme <input>

Input
  dev

Examples
  $ baretheme dev
`, {
  input: ['dev', 'build', 'start'],
});

require('./cli.js')(cli);
