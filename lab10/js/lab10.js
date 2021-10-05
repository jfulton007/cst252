/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 5 October
  * Liscense: Public Domain
*/
function finishLab10() {
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  document.getElementById("user-name").addEventListener("click", displayName);
}
