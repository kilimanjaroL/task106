'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var i = [];
    var s = objectB.value;
    for(var t = 0;t<collectionA.length;t++)
    {
        var tk = collectionA[t].key;
        for(var j = 0;j<s.length;j++)
            if(tk==s[j])
            {
                i.push(tk);
                break;
            }
    }
    return i;
}
