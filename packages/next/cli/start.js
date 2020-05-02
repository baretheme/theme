const consola = require('consola');
const startServer = require('next/dist/server/lib/start-server').default;

const start = async ({
  barethemeDir, hostname, port, help,
}) => {
  if (help) {
    consola.log(`
    Description
      Starts the application in production mode.
      The application should be compiled with \`baretheme build\` first.

    Usage
      $ baretheme start -p <port>

    Options
      --port, -p      A port number on which to start the application
      --hostname, -H  Hostname on which to start the application
      --help, -h      Displays this message
  `);
    return process.exit();
  }

  startServer({
    dir: barethemeDir, dev: true, isNextDevCommand: true,
  }, port, hostname).then(async (app) => {
    consola.log(`Started production server on http://${hostname}:${port}`);
    await app.prepare();
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
};

module.exports = { start };
