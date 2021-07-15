var propType = inputData.propType;
if (propType.includes("Student")) {
  propType = "Student";
}
else {
  propType = "Residential";
}
return {propType}
