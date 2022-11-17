// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
}

// setting default data and methods
Vehicle.prototype.speed = 80;
Vehicle.prototype.type = "Vehicle";
Vehicle.prototype.wheels = 4;
Vehicle.prototype.move = function () {
  console.log(`I am a ${this.type} and I am moving at ${this.speed}.`);
};
Vehicle.prototype.stop = function () {
  console.log(`I am a ${this.type} and I have stopped moving.`);
};

// Vehicle.move(); will not work coz prorotype methods are only default for the instance of the object

const car = new Vehicle("car", 90);
console.log(car, car.wheels); // Vehicle { type: 'car', speed: 90 } 4

car.move(); // I am a car and I am moving at 90.

// we can still overwrite the existing prototypes of Vehicle. We add additional behaviours.  But we cannot reutilize those additional behaviors.
car.move = function () {
  console.log("I am a autopilot move"); // I am a autopilot move
};

// I can write new method for the instance.
car.autoPilot = function () {
  return console.log("I am Super autopilot");
};

car.autoPilot(); // I am Super autopilot

car.move(); // I am a autopilot move
// this is polymorphism cause Vehicle is behaving in multiple ways
// polymorphism: Polymorphism is the ability of an object to take on many forms.

// ----------------------------------------
// prototype based inheritance/ prototypical sub-classing
