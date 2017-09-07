/**
 * Danh sách các từ stopwords tiếng Việt được lấy ở đây
 * Ref: https://github.com/stopwords/vietnamese-stopwords
 */
var fs = require('fs');
var path = require('path');
var tokenizer = require('../ws')();

var words = fs.readFileSync(path.join(__dirname, 'stopwords_viVN.txt'), 'utf8');

exports.list = words.split('\n').filter(word => !!word)

exports.remove = function removeStopwords(text) {
    var tokens = text;

    if (typeof text === 'string') {
        tokens = text.split(' ')
    }

    // remove stopwords
    var stopwords = exports.list;
    return tokens.filter((token) => {
        return stopwords.indexOf(token) < 0
    })

}

exports.tokenize = function tokenizeStopwords(text) {
    if (!text)  return []
    
    var tokens = tokenizer.tokenize(text)
    return exports.remove(tokens);
}
