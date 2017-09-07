var regex = require('./regex')
var unicode = require('./unicode')

/**
 * Chuyển hóa bộ mã unicode trước khi clean
 */
var unicodeNormalize = exports.normalize = function unicodeNormalize(str) {
    return unicode.fromHtmlChars(unicode.normalize(str));
}

var cleanText = exports.clean = function cleanText(str) {
    return regex.removeJunks(str)
}

/**
 * chuẩn hóa và làm sạch câu văn bản
 */
exports.all = function clean(str) {
    return cleanText(unicodeNormalize(str));
}