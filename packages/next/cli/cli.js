const { spawn } = require('child_process');
const consola = require('consola');
const { resolve } = require('path');
const { start } = require('./start');

module.exports = ({ input }) => {
  consola.info('WELCOME TO BARETHEME');
  const projectDir = process.cwd();
  const barethemeDir = resolve(__dirname, '..');

  start({
    projectDir,
    barethemeDir,
    command: input[0],
  });

  try {
    const next = spawn('next', input, {
      cwd: barethemeDir,
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        BARETHEME_ROOT: projectDir,
      },
    });
    next.on('error', () => {
      process.exit();
    });
    next.on('close', () => {
      process.exit();
    });
  } catch (e) {
    console.error('ERR IN CATCH', e);
  }
};
