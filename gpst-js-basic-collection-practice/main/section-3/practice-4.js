'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result=[];
    for(var l = 0;l<collectionA.length;l++)
    {
        var number = 0;
        var k = collectionA[l];
        if(k.length>1)
        {
            var k0 = k[0];
            var sub = k.substring(2);
            for(var i = 0;i<sub.length;i++)
            {
                var a = 0;
                while(a!=sub[i])
                    a++;
                number = number*10+a;
            }
        }
        var tag = -1;
        for(var w = 0;w< result.length;w++)
        {
            var b = result[w];
            if(b.key==k[0])
                tag = w;
        }
        if(tag==-1)
        {
            var tem = {};
            tem.key = k[0];
            if(k.length>1)
                tem.count = number;
            else
                tem.count = 1;
            result.push(tem);
        }
        else
        {
            if(k.length>1)
                result[tag].count+=number;
            else
                result[tag].count+=1;
        }
    }
    var sub = objectB.value;
    for(var i =0;i<sub.length;i++)
    {
        var tem = sub[i];
        for(var j =0;j<result.length;j++)
        {
            var key = result[j].key;
            if(key==tem)
            {
                if(result[j].count>=3)
                {
                    var t = result[j].count;
                    t = Math.floor(t/3);
                    result[j].count-=t;
                }
                break;
            }
            else
                continue;
        }
    }
    return result;
}
