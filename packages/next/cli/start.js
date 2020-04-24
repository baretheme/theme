const fs = require('fs-extra');
const consola = require('consola');
const { resolve, join } = require('path');
const { TMP, CUSTOM_CONFIG } = require('../constants');

const start = ({ command, projectDir }) => {
  consola.info('Starting Baretheme...');
  const configPath = join(projectDir, CUSTOM_CONFIG);
  const tmpDir = resolve(__dirname, '..', TMP);

  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line
    const config = require(configPath);
    fs.outputJsonSync(join(tmpDir, 'baretheme.json'), config);
  }

  if (command === 'dev' && configPath) {
    fs.watch(configPath, () => {
      consola.info(`Found a change in ${CUSTOM_CONFIG}. Restart the server to see the changes in effect.`);
    });
  }
};

module.exports = { start };
