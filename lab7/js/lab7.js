/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 27 September
  * Liscense: Public Domain
*/
function sortUserName() {
  var userName = window.prompt("Hi, Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArray.join('');
  console.log("nameSorted =", nameSorted);
  // Above lines into a single line
  // userName.toLower().split("").sort().join("")
  return nameSorted;
}
// Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
