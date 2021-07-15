const months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var startDate = inputData.startDate;
var n = startDate.search("T");
startDate = startDate.slice(0, n);
var elements = startDate.split("-");
var newDateAvailable = elements[2] + "/" + elements[1] + "/" + elements[0];

let dateAvib = new Date;
var required = false;
var object1 = newDateAvailable;
var dateVars = object1.split("/");
var newDay = (parseInt(dateVars[0])) - 14;
var newMonth = (parseInt(dateVars[1]));
var newYear = parseInt(dateVars[2]);
if (newDay < 1) {
  //dateAvib.setDate(0);
  var d = new Date(months[newMonth - 1] + " 2020");
  d.setDate(0);
  dateAvib = d;
  
  var elements = startDate.split("-");
  var newDateAvailable = elements[2] + "/" + elements[1] + "/" + elements[0];
  
  required = true;
}
else {
  var newDateAvailable = newDay + "/" + newMonth + "/" + newYear;
  required = false;
}

return {startDate, newDateAvailable, dateAvib, newDay, required, months}
