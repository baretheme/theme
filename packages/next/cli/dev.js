const fs = require('fs-extra');
const { join } = require('path');
const consola = require('consola');
const startServer = require('next/dist/server/lib/start-server').default;
const { CUSTOM_CONFIG } = require('../constants');

const dev = async ({
  projectDir, barethemeDir, hostname, port, help,
}) => {
  const configPath = join(projectDir, CUSTOM_CONFIG);

  if (help) {
    consola.log(`
    Description
      Starts the application in development mode (hot-code reloading, error
      reporting, etc)

    Usage
      $ baretheme dev -H baretheme.com -p <port number>

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
    consola.log(`Started dev server on http://${hostname}:${port}`);
    await app.prepare();
  }).catch((err) => {
    if (err.code === 'EADDRINUSE') {
      let errorMessage = `Port ${port} is already in use.`;
      const appPackage = fs.readJsonSync(join(projectDir, 'package.json'));
      if (appPackage.scripts) {
        const nextScript = Object.entries(appPackage.scripts).find(
          (scriptLine) => scriptLine[1] === 'next',
        );
        if (nextScript) {
          errorMessage += `\nUse \`npm run ${nextScript[0]} -- -p <some other port>\`.`;
        }
      }
      // eslint-disable-next-line no-console
      console.error(errorMessage);
    } else {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    process.nextTick(() => process.exit(1));
  });

  fs.watch(configPath, () => {
    consola.info(`Found a change in ${CUSTOM_CONFIG}. Restart the server to see the changes in effect.`);
  });
};

module.exports = { dev };
