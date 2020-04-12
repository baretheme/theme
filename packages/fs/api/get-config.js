const { DEFAULTS, CONFIG_PATH } = require('../constants');
const { readJson } = require('../lib/read-json');

const getConfig = () => readJson(CONFIG_PATH) || DEFAULTS;

module.exports = { getConfig };
