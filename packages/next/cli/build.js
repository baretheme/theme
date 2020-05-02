const consola = require('consola');
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

  buildFiles(barethemeDir)
    .then(() => process.exit(0))
    .catch((err) => {
      consola.error('> Build error occurred');
      consola.error(err);
      process.exit();
    });
};

module.exports = { build };
