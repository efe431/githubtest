#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("./helpers");

/* istanbul ignore next */
if (!module.parent) {
  require('./cli').default();
}

var _default = _helpers.createBots;
exports.default = _default;