var list = inputData.list;
if (list){
  var arrayTrue = list.includes(",");
  if (arrayTrue){
    var activeList = list.split(",");
    var filter = activeList.filter(function(value, index, arr){ return value == "c";});
    if (filter == ""){
      activeList.push("c");
    }
    var arrayList = arrayToList(activeList.length, activeList);
    function arrayToList(listLength, arrayList){
      var i;
      var holder;
      for(i = 0; i < listLength; i++){
        if (i == 0){
          holder = arrayList[i];
        }
        else{
        holder = holder + "," + arrayList[i];
        }
      }
      return holder;
    }
  }
  else {
    var activeList = list + (",b");
  }
}
return {activeList, filter, arrayList};
