var object1 = inputData.date;
var objectVars = object1.split("/");
var objectMonth = (parseInt(objectVars[1])) + 6;
var objectYear = parseInt(objectVars[2]);
if (objectMonth >= 13) {
  objectMonth = objectMonth - 12;
  objectYear = objectYear + 1;
}
var newDate = objectMonth + "/" + objectVars[0] + "/" + objectYear;
var newDateCompare = objectVars[0] + "/" + objectMonth + "/" + objectYear;
return {newDate, newDateCompare}
