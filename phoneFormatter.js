var phone = inputData.phone;
if (phone !=null && phone != ""){
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
}
return {finalphone}
