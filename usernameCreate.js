var holder1 = inputData.address1;
var address = holder1.split(" ");
var holder2 = inputData.postCode;
var postCode = holder2.split(" ");
if (postCode[1] == null){
  var username = address[0] + address[1] + postCode[0];
}
else
{
var username = address[0] + address[1] + postCode[0] + postCode[1];
}
if (username.includes(",")) {
  var holder = username.split(",");
  username = "";
  for (var i = 0; i < holder.length; i++) {
    username = username + holder[i];
  }
}
return {username}
