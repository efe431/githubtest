"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateChannelMapping = validateChannelMapping;

var _lodash = _interopRequireDefault(require("lodash"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates a given channel mapping, throwing an error if it's invalid
 * @param  {Object} mapping
 * @return {Object}
 */
function validateChannelMapping(mapping) {
  if (!_lodash.default.isObject(mapping)) {
    throw new _errors.ConfigurationError('Invalid channel mapping given');
  }

  return mapping;
}