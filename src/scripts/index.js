'use strict';
var d3Hierarchy = require('d3-hierarchy');

module.exports = {

    hierarchy: function(data) {
        var root = d3Hierarchy.hierarchy(data);

        return root
            .sum(function(d) {
                return (d.year);
            })
            .sort(function(a, b) {
                return b.value - a.value;
            });
    },

    pack: function(w, h, padding, data) {
      padding = padding || 0;

      var aux = d3Hierarchy.pack()
        .size([w, h])
        .padding(padding);

        return aux(data);
    }
};
