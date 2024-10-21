const mdate = "1995-10-05";

// Function declaration
function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(mdate));

// Function expression
const year_a = (str) => str.split("-")[0];
console.log(year_a(mdate));
