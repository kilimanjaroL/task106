'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = new Array();
    var v = objectB.value;
    for(var i = 0;i < collectionA.length;i++ ) {
        for (var j = 0; j < v.length; j++) {
            if (collectionA[i] == v[j]) {
                result.push(collectionA[i]);
                break;
            }
        }
    }
    return result;
}
