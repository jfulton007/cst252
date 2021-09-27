/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 21 September
  * Liscense: Public Domain
*/

//Define Variables
myTransport = ["Ford Fiesta", "Walking", "Rides from friends"];

myMainRide = {
  make: "Ford",
  model: "Fiesta",
  color: "Blue",
  year: "2011",
  age: function() {
    return 2021 - age;
  }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
