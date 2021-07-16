var propertyreference = inputData.propertyreference;
let propertyTag, acuity, development, specEnq = false;
if (propertyreference != "" && propertyreference != null) {
  var ref = propertyreference.substring(7, propertyreference.length);
  propertyTag = ref;
  development = slice(ref, "_");
}
var name = inputData.name;
var phone = inputData.phone;
var address = inputData.address;
//var propIst = propertyInterest(inputData.propertyInterest); //Uses the address of property

var propIst = reference(propertyreference, development)
//Uses the rightmove reference (This is as the development doesnt exist in righmove yet)

/*
//Sends leads to specific people depending on development
//Change the wording to change the development from Rightmove
//Use: || development == "xxx" - to add another development to a person 
//Where xxx is the development on the rightmove reference
if (development == "LINENQUARTER") {
  acuity = "https://app.acuityscheduling.com/schedule.php?owner=21309198&appointmentType=24375443";
  specEnq = true;
} else if (development == "AURORA") {
  acuity = "https://app.acuityscheduling.com/schedule.php?owner=21309198&appointmentType=18547665";
  specEnq = true;
}

if (!specEnq) {
  acuity = "https://app.acuityscheduling.com/schedule.php?owner=21309198&appointmentType=18547588";
}
*/

//Sends all leads to tim
if (development != null && development != "") {
  specEnq = true;
  acuity = "https://app.acuityscheduling.com/schedule.php?owner=21309198&appointmentType=18547665";
} else {
  specEnq = false;
  acuity = "https://app.acuityscheduling.com/schedule.php?owner=21309198&appointmentType=18547665";
}

//Formats the name
var splitText = name.split(" ");
var words = splitText.length; 
let title, firstname, lastname;  
if (splitText.length == 1) {
  firstname = splitText[0];
} else if (splitText.length == 2 ) {
  if (splitText[0].match(/Mr|Mrs|Miss|Ms/g)) {
    title = splitText[0];
    firstname = splitText[1];    
  } else {
    firstname = splitText[0];
    lastname = splitText[1];
  } 
} else if (splitText.length > 2 ) {
  if (splitText[0].match(/Mr|Mrs|Miss|Ms/g)) {
    title = splitText[0];
    firstname = splitText[1];    
    lastname = name.slice(name.search(splitText[1])+splitText[1].length, name.length); 
  }  else {
    firstname = splitText[0];    
    lastname = name.slice(name.search(" "), name.length);  
  }
} 

// Check if the phone is available. If yes, add +44
if(phone) { 
  if(phone.match(/^(?:0)(?:\d){9,10}$/g)) { // Check if the phone Starts with a 0 
    var finalphone = phone.replace(0, "+44"); //  Remove 0 and add +44
  } else if (phone.match(/^(0044)(?:\d){9,10}$/g)) {   // Check if it Starts with 0044
    var finalphone = phone.replace("00", "+"); // Then Remove 00 and add +
  } else if (phone.match(/^(\+?44)(?:\d){9,10}$/g) || phone.includes("+") ) {  
    // Check if it starts with +44 or have a + anyway
    var finalphone = phone;  // Then do nothing
  } else {
    var finalphone = "+44"+phone;
  }
}

//format the address to get addressline and zipcode
let fulladdress_unescape, n, addressline, zipcode;
fulladdress_unescape = unescape(address);
n = fulladdress_unescape.lastIndexOf(",");
addressline = fulladdress_unescape.substr(0,n);
zipcode = fulladdress_unescape.substr(n+1);

//var length = propertyreference.length;
return {acuity, development, propIst, title:title, firstname:firstname, lastname:lastname, phone: finalphone, addressline: addressline, zipcode: zipcode, propertyTag:propertyTag, specEnq}
function reference(ref, dev) {
  var ref = propertyreference.substring(7, propertyreference.length);
  let n = ref.search("_");  
  let plot = ref.substring((n + 1), ref.length);
  n = plot.search("T");
  plot = plot.slice((n + 1), plot.length)
  let propIst = "Plot " + plot + ", " + dev;
  return propIst;
}
function propertyInterest(propIst) {
  //This sets up the exact property address from the righmove email
  var elements = propIst.split(",");
  for (var i = 0; i < elements.length; i++) {
    if (i == 0) {
      propIst = "Plot " + elements[i];
    } else if (i != (elements.length - 2)){
      if (i == 3 && specEnq) {
        propIst = propIst + ", " + development + ", " + elements[i];
      } else {
        propIst = propIst + ", " + elements[i];   
      }
    }
  }
  return propIst
}
function slice(text, searchItem) {
  var n = text.search(searchItem);
  return text.slice(0, n);
}
