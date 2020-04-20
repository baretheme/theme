const baretheme = require('@baretheme/next');
require('dotenv').config();

const withBaretheme = baretheme({
  home: process.env.BARETHEME_HOME,
});

const config = withBaretheme({});

module.exports = config;
