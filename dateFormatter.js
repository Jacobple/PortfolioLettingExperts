var object1 = inputData.object1;
//input in the format of 2020-08-18T13:44:44.764Z
var n = object1.search("T");
object1 = object1.slice(0, n);
var elements = object1.split("-");
var newDate = elements[1] + "/" + elements[2] + "/" + elements[0];
return {object1, newDate}
