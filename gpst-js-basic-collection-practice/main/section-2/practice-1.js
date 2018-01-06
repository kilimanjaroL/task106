'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array();
  for(var i = 0;i < collection.length;i++){
    var temp = -1;
    for (var j = 0;j < result.length;j++){
      if(collection[i] == result[j].key){
        temp = j;
        break;
      }
    }

    if(temp == -1) {
      var a = {};
      a.key = collection[i];
      a.count = 1;
      result.push(a);
    }

    else{
      result[temp].count = result[temp].count + 1;
    }
  }
  return result ;
}
