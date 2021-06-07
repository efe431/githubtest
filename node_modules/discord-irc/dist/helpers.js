"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBots = createBots;

var _lodash = _interopRequireDefault(require("lodash"));

var _bot = _interopRequireDefault(require("./bot"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reads from the provided config file and returns an array of bots
 * @return {object[]}
 */
function createBots(configFile) {
  const bots = []; // The config file can be both an array and an object

  if (Array.isArray(configFile)) {
    configFile.forEach(config => {
      const bot = new _bot.default(config);
      bot.connect();
      bots.push(bot);
    });
  } else if (_lodash.default.isObject(configFile)) {
    const bot = new _bot.default(configFile);
    bot.connect();
    bots.push(bot);
  } else {
    throw new _errors.ConfigurationError();
  }

  return bots;
}