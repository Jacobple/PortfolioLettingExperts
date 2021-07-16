let tag, fail = false;
var buyer = splitter(inputData.buyerType, "-");
var purchaseMethod = firstLetter(inputData.purchaseMethod);
var other = firstLetter(inputData.otherText);
var mipR = firstLetter(inputData.mipRequest);
var ci = firstLetter(inputData.combinedIncome);
var mip = inputData.mip;
var ac = firstLetter(inputData.adverseCredit);
if (purchaseMethod != "Cash") {
  if (ac == "Yes") {
    fail = true;
  }
  if (mip != "" && mip != null) {
    if (mip.includes("-")) {
      mip = splitter(mip, "-");
    }
    if (mip.includes("No")) {
      fail = "MIP";      
    }
  }
  if (mip != "" && mip != null) {
    if (purchaseMethod == "Mortgage" && (mip.includes("Yes"))) {
      fail = false;
    } else {
      fail = "MIP";
    }
    var broker = inputData.broker;    
    if (broker % 2 == 0) {
      tag = "MBR Peter Morgan"; // Peter Morgan
    } else {
      tag = "MBR Peter Morgan"; // Adriana
    }
  }
}
return {fail, tag, buyer, purchaseMethod, mip, other, mipR, ac, ci}
function splitter(text, icon) {
  var newText = null;
  if (text.includes(icon)) {
    var elements = text.split(icon);    
    for (var i = 0; i < elements.length; i++) {
      if (newText == "" || newText == null) {
        newText = firstLetter(elements[i]);
      } else {
        newText = newText + " " + elements[i];
      }
    }
  } else {
    newText = firstLetter(text);
  }
  return newText;
}
function firstLetter(string) {
  if (string != null && string != "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
