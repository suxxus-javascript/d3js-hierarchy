'use strict';

var test = require('tape');
var main = require('scripts');
var data = require('./fixtures/data');

test('hierarchy', function(t) {

    var actual = main.hierarchy(data.data)
        .children
        .map(function(item) {
            return item.value;
        }),
        expect = data.hierarchyChildrenResp;
    t.deepEqual(actual, expect);
    t.end();
});

test('pack', function(t) {

    var actual = main.pack(300, 300, 1.5, main.hierarchy(data.data))
        .children
        .map(function(item) {
            return item.r;
        }),
        expect = data.packRespRadiuses;
    t.deepEqual(actual, expect);
    t.end();
});
