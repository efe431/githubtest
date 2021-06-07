"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatFromDiscordToIRC = formatFromDiscordToIRC;
exports.formatFromIRCToDiscord = formatFromIRCToDiscord;

var _ircFormatting = _interopRequireDefault(require("irc-formatting"));

var _simpleMarkdown = _interopRequireDefault(require("simple-markdown"));

var _ircColors = _interopRequireDefault(require("irc-colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mdNodeToIRC(node) {
  let {
    content
  } = node;
  if (Array.isArray(content)) content = content.map(mdNodeToIRC).join('');

  switch (node.type) {
    case 'em':
      return _ircColors.default.italic(content);

    case 'strong':
      return _ircColors.default.bold(content);

    case 'u':
      return _ircColors.default.underline(content);

    default:
      return content;
  }
}

function formatFromDiscordToIRC(text) {
  const markdownAST = _simpleMarkdown.default.defaultInlineParse(text);

  return markdownAST.map(mdNodeToIRC).join('');
}

function formatFromIRCToDiscord(text) {
  const blocks = _ircFormatting.default.parse(text).map(block => ({ // Consider reverse as italic, some IRC clients use that
    ...block,
    italic: block.italic || block.reverse
  }));

  let mdText = '';

  for (let i = 0; i <= blocks.length; i += 1) {
    // Default to unstyled blocks when index out of range
    const block = blocks[i] || {};
    const prevBlock = blocks[i - 1] || {}; // Add start markers when style turns from false to true

    if (!prevBlock.italic && block.italic) mdText += '*';
    if (!prevBlock.bold && block.bold) mdText += '**';
    if (!prevBlock.underline && block.underline) mdText += '__'; // Add end markers when style turns from true to false
    // (and apply in reverse order to maintain nesting)

    if (prevBlock.underline && !block.underline) mdText += '__';
    if (prevBlock.bold && !block.bold) mdText += '**';
    if (prevBlock.italic && !block.italic) mdText += '*';
    mdText += block.text || '';
  }

  return mdText;
}