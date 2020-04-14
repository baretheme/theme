const { join } = require('path');
const { setup: fsSetup } = require('@baretheme/fs');
const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')(['@baretheme/*']);

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const defaults = {
    documentsPath: join(process.cwd(), 'content', 'documents'),
    dataPath: join(process.cwd(), 'content', 'data'),
  };

  const options = {
    ...defaults,
    ...pluginOptions,
  };

  fsSetup({
    documentsPath: options.documentsPath,
    dataPath: options.dataPath,
  });

  return withTM(withSvgr({
    ...nextConfig,
    webpack(config, options) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        ...config.node,
        fs: 'empty',
      };

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  }));
};
