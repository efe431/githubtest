"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireWildcard(require("winston"));

var _util = require("util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function simpleInspect(value) {
  if (typeof value === 'string') return value;
  return (0, _util.inspect)(value, {
    depth: null
  });
}

function formatter(info) {
  const splat = info[Symbol.for('splat')] || [];
  const stringifiedRest = splat.length > 0 ? ` ${splat.map(simpleInspect).join(' ')}` : '';
  const padding = info.padding && info.padding[info.level] || '';
  return `${info.timestamp} ${info.level}:${padding} ${info.message}${stringifiedRest}`;
}

const logger = _winston.default.createLogger({
  transports: [new _winston.default.transports.Console()],
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: _winston.format.combine(_winston.format.colorize(), _winston.format.timestamp(), _winston.format.printf(formatter))
});

var _default = logger;
exports.default = _default;