'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var i=[];
    for(var t = 0;t<collectionA.length;t++)
    {
        var tag = -1;
        for(var k =0;k<i.length;k++)
        {
            if(collectionA[t]==i[k].key)
            {
                tag = k;
                break;
            }
        }
        if(tag==-1)
        {
            var tem={};
            tem.key= collectionA[t];
            tem.count = 1;
            i.push(tem);
        }
        else
        {
            i[tag].count =i[tag].count+1;
        }
    }
    var sub = objectB.value;
    for(var j =0;j<sub.length;j++)
    {
        var tem = sub[j];
        for(var w =0;w<i.length;w++)
        {
            var key = i[w].key;
            if(key==tem)
            {
                if(i[w].count>=3)
                {
                    var tt = i[w].count;
                    tt = Math.floor(tt/3);
                    i[w].count-=tt;
                }
                break;
            }
            else
                continue;
        }
    }
    return i;
}
