#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _stripJsonComments = _interopRequireDefault(require("strip-json-comments"));

var _lodash = require("lodash");

var helpers = _interopRequireWildcard(require("./helpers"));

var _errors = require("./errors");

var _package = require("../package.json");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readJSONConfig(filePath) {
  const configFile = _fs.default.readFileSync(filePath, {
    encoding: 'utf8'
  });

  try {
    return JSON.parse((0, _stripJsonComments.default)(configFile));
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new _errors.ConfigurationError('The configuration file contains invalid JSON');
    } else {
      throw err;
    }
  }
}

function run() {
  _commander.default.version(_package.version).option('-c, --config <path>', 'Sets the path to the config file, otherwise read from the env variable CONFIG_FILE.').parse(process.argv); // If no config option is given, try to use the env variable:


  if (_commander.default.config) process.env.CONFIG_FILE = _commander.default.config;
  if (!process.env.CONFIG_FILE) throw new Error('Missing environment variable CONFIG_FILE');

  const completePath = _path.default.resolve(process.cwd(), process.env.CONFIG_FILE);

  const config = (0, _lodash.endsWith)(process.env.CONFIG_FILE, '.js') ? require(completePath) : readJSONConfig(completePath);
  helpers.createBots(config);
}

var _default = run;
exports.default = _default;