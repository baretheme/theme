const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')(['@baretheme/fs', '@baretheme/core']);

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const contentPath = pluginOptions.contentPath || 'content';
  return withTM(withSvgr({
    ...nextConfig,
    env: {
      ...nextConfig.env,
      CONTENT_PATH: contentPath,
    },
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
