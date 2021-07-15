var name = inputData.propName;
var source = inputData.propSource;
let email, nameEmail;
var nameSplit = name.split(" ");
for (var i = 0; i < nameSplit.length; i++) {
  if (i == 0) {
    nameEmail = nameSplit[i];
  }
  else {
    nameEmail = nameEmail + nameSplit[i];
  }
}
if (source == "CPL") {
  email = nameEmail + "@clarkesproperties.co.uk";
}
else {
  email = nameEmail + "@portfoliolettingexperts.co.uk";
}
return {email}
