'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var v = objectB.value;
    for(var i = 0;i < v.length;i++){
        var temp = v[i];
        for(var j = 0;j < collectionA.length;j++){
            var k = collectionA[j].key;
            if(k == temp){
                if(collectionA[j].count >= 3) {
                  var c = Math.floor(collectionA[j].count/3)
                  collectionA[j].count -= c;
                }
                break;
            }
            else continue;
        }
    }

    return collectionA ;
}
