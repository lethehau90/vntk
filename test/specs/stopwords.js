var test = require('tape')
, vntk = require('../../lib/vntk')
, stopwords = vntk.stopwords
;

test('remove stopwords from text', function (t) {
    t.plan(1)
    
    var result = stopwords.remove('Từ viết tắt của hệ_thống đánh_giá hiệu_quả của điều_hòa_không_khí là gì')
    t.deepEqual(result, [ 'Từ', 'viết', 'tắt', 'hệ_thống', 'đánh_giá', 'hiệu_quả', 'điều_hòa_không_khí' ])
})

test('remove stopwords from text (untokenized)', function (t) {
    t.plan(1)
    
    var result = stopwords.tokenize('Từ viết tắt của hệ thống đánh giá hiệu quả của điều hòa không khí là gì')
    t.deepEqual(result, [ 'Từ', 'viết', 'tắt', 'hệ_thống', 'đánh_giá', 'hiệu_quả', 'điều_hòa_không_khí' ])
})

