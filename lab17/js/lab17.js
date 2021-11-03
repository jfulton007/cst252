/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 3 November
  * Liscense: Public Domain
*/
class Car {
  constructor(brand) {
    this.Fiesta = brand;
  }
}
mycar = new Car("Ford");
document.getElementById("Car")
  .innerHTML = mycar.info();
