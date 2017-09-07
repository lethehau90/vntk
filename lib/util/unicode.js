var unorm = require('unorm');

/**
 * Chuẩn hóa bộ mã unicode
 * - Canonical Decomposition, followed by Canonical Composition
 * 
 * Ex: Considering two same meaning but different encode
 * + "Phải. Và nó sẽ được thừa nhận bởi những gia đình có danh tiếng nhất Miền Nam"
 * + "Phải. Và nó sẽ được thừa nhận bởi những gia đình có danh tiếng nhất Miền Nam"
 */
exports.normalize = function (str) {
    return unorm.nfc(str);
};

/**
 * Chuyển hóa văn bản web
 * 
 * Ex: 2 câu tiếng việt sử dụng 2 bộ mã hóa khác nhau
 * + Cho ch#250;ng t#244;i xem c#225;i c#242;n l#7841;i l#224; g#236; n#224;o.
 * + Cho chúng tôi xem cái còn lại là gì nào.
 */
exports.fromHtmlChars = function (str) {
    return str.replace(/&?#([0-9]{1,});/gi, function (match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
};