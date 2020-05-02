const { resolve } = require('path');
const { dev } = require('./dev');
const { start } = require('./start');
const { build } = require('./build');

module.exports = ({ input, flags, showHelp }) => {
  const projectDir = process.cwd();
  const barethemeDir = resolve(__dirname, '..');
  const command = input[0];
  const commands = {
    dev,
    start,
    build,
  };

  if (!commands[command]) {
    return showHelp();
  }

  return commands[command]({
    barethemeDir,
    projectDir,
    ...flags,
  });
};
