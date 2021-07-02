var propertyreference = inputData.propertyreference;
let propertyTag;
var propIst = inputData.propertyInterest;
var elements = propIst.split(",");
for (var i = 0; i < elements.length; i++) {
  if (i == 0) {
    propIst = elements[i];    
  } else if (i != (elements.length - 2)){
    propIst = propIst + ", " + elements[i];  
  }
}
var name = inputData.name;
var phone = inputData.phone;
var address = inputData.address;
//Formats the name
var splitText = name.split(" ");
var words = splitText.length;
let title, firstname, lastname;
//Example input: 79660_6908-V8sBcw_hB9o
if (splitText.length == 1) {
  firstname = splitText[0];
} else if (splitText.length == 2 ) {
  if (splitText[0].match(/Mr|Mrs|Miss|Ms/g)) {
    title = splitText[0];
    firstname = splitText[1];    
  }  else {
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
    var finalphone = "+44" + phone;
  }
}
//format the address to get addressline and postcode
//postcode = zipcode in this instance for understandablity with the crm
let fulladdress_unescape, n, addressline, zipcode;
fulladdress_unescape = unescape(address);
n = fulladdress_unescape.lastIndexOf(",");
addressline = fulladdress_unescape.substr(0,n);
zipcode = fulladdress_unescape.substr(n+1);
//get property tag and property virtual id
var virtualTour = propertyreference.includes("-")
let propertyAttributes, propertyVirtualId;
if(propertyreference) {
  let n = propertyreference.search("_");
  if (virtualTour) {
    var ref = propertyreference.slice((n + 1), propertyreference.length);
    n = ref.search("-");
    var propVT = ref.slice(n, ref.length);
    propertyVirtualId = 
"https://tim-portfoliolettingexperts-co-uk.vr-360-tour.com/e/" + propVT + "/e";
    propertyTag = ref.slice(0, n);  
  } else {
    propertyTag = propertyreference.slice((n + 1), propertyreference.length);  
  }
} else {
  propertyTag = "";
  propertyVirtualId = "";
}
var length = propertyreference.length;
if (virtualTour) {
  return {title:title, firstname:firstname, lastname:lastname, phone: finalphone, addressline: addressline, zipcode: zipcode, propertyTag:propertyTag,propertyVirtualId: propertyVirtualId, length, propIst, n}
} else {
  return {title:title, firstname:firstname, lastname:lastname, phone: finalphone, addressline: addressline, zipcode: zipcode, propertyTag:propertyTag, length, propIst}
}
