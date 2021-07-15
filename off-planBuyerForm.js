let fail = false;
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
  }
} else {
  if (mip != "" && mip != null) {
    if (purchaseMethod == "Mortgage" && (mip.includes("Yes"))) {
      fail = false;
    } else {
      fail = true;
    }
  }
}
return {fail, buyer, purchaseMethod, mip, other, mipR, ac, ci}
function splitter(text, icon) {
  if (text.includes(icon)) {
    var elements = text.split(icon);
    var newText = null;
    for (var i = 0; i < elements.length; i++) {
      if (newText == "" || newText == null) {
        newText = firstLetter(elements[i]);
      } else {
        newText = newText + " " + elements[i];
      }
    }
  }
  return newText;
}
function firstLetter(string) {
  if (string != null && string != "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
