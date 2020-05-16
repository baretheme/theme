const consola = require('consola');
const fs = require('fs-extra');
const path = require('path');
const buildFiles = require('next/dist/build').default;

const build = async ({
  barethemeDir, help,
}) => {
  if (help) {
    consola.log(`
    Description
        Compiles the application for production deployment
    Usage
      $ baretheme build
  `);
    return process.exit();
  }

  consola.info('Building files from directory', barethemeDir);
  buildFiles(barethemeDir)
    .then(() => process.exit(0))
    .catch((err) => {
      consola.error('> Build error occurred');
      consola.error(err);
      process.exit();
    });

  try {
    await fs.copy(path.join(barethemeDir, '.next'), path.join(process.cwd(), '.baretheme'));
    consola.success('Baretheme compiled successfully.');
  } catch (err) {
    consola.error('Baretheme failed compiling.');
    consola.error(err);
  }
};

module.exports = { build };
