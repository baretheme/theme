const { spawn } = require('child_process');

module.exports = ({ input }) => {
  console.log('WELCOME TO BARETHEME');
  const home = process.cwd();

  try {
    const next = spawn('next', input, {
      cwd: __dirname,
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        BARETHEME_HOME: home,
      },
    });
    next.on('error', () => {
      console.error('ERROR');
    });
    next.on('close', () => {
      console.error('CLOSE');
    });
    next.on('disconnect', () => {
      console.error('DISCONNECT');
    });
  } catch (e) {
    console.error('ERR IN CATCH', e);
  }
};
