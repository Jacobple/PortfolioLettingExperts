var object1 = inputData.dateAvib;
//input in the format of 2020-08-18T13:44:44.764Z
var required = inputData.required;
if (required) {
  var newDay = inputData.newDay;
  newDay = parseInt(newDay);
  var n = object1.search("T");
  object1 = object1.slice(0, n);
  var elements = object1.split("-");
  var day = parseInt(elements[2]) + newDay;
  var newDate = day + "/" + elements[1] + "/" + elements[0];
}
else {
  var newDate = object1;
}
return {object1, newDate, newDay}
