const unicodeRange = require("./constants").unicodeRange;

var alphabet = exports.alphabet = new RegExp(`[${unicodeRange}+]`, 'g');
var alphanumeric = exports.alphanumeric = new RegExp(`[${unicodeRange}0-9]+`, 'g');
var startIsNotAlphaNumeric = exports.startIsNotAlphaNumeric = new RegExp(`^[^${unicodeRange}0-9]+`, 'g');
var endIsNotAlphaNumeric = exports.endIsNotAlphaNumeric = new RegExp(`[^${unicodeRange}0-9?!]+$`, 'g');
var startEndIsNotAlphaNumeric = exports.startEndIsNotAlphaNumeric = new RegExp(`^[^${unicodeRange}0-9]+|[^${unicodeRange}0-9?!]+$`, 'g');
var multidots = exports.multidots = / *[.]{2,} */g;
var threedots = exports.threedots = /[.]{3} /g;
var onedot = exports.onedot = new RegExp(`\.{1}`, 'g');
var breaker = exports.breaker = new RegExp(` - |[\?\.] ?- +|[\?].+`, 'g');
var remover = exports.remover = /[`~@#$%^&*()_|+\-=÷¿;:'"<>\{\}\[\]\\\/♪]/gi
var comment = exports.comment = /[(].+[)]/gi
var dot_underscore = exports.dot_underscore = /_[.] | [.]_/g;

// remove common junks, xóa ký tự tạp nham
exports.removeJunks = function removeJunks(str) {
    return (str || '').replace(startEndIsNotAlphaNumeric, '')
        .replace(remover, '')
        .replace(comment, '')
        .replace(multidots, '')
        .replace('-,', '')
}

// tách các câu văn bằng regex đơn giản
exports.getSentences = function splitText(str) {
    return (str || '').replace(breaker)
}