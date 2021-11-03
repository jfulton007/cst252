/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 31 October
  * Liscense: Public Domain
*/
function Vehicle(make, model, year, color, extras) {
  this.makeName = Ford;
  this.modelName = Fiesta;
  this.yearName = 2011;
  this.colorName = Blue;
  this.extrasName = None;
  this.info = function () {
    return this.colorName + " " + this.yearName + " " + this.makeName + " " + this.modelName + " with " + this.extrasName + " called " + this.name;
  }
}
const myCar = new Vehicle("Ford", "Fiesta", "2011", "Blue", "None");
const myBike = new Vehicle("Basic", "Bike", "2009", "Black", "None");
var bike = new Vehicle("Schwinn", "LeToure", 1974, "gold", "Brooks saddle");
