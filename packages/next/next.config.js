const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')(['@baretheme/*']);

module.exports = withTM(withSvgr({
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.node = {
      ...config.node,
      fs: 'empty',
    };

    return config;
  },
}));
