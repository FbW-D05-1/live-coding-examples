function Nums() {
  this.x = 100;
  this.y = 200;

  this.show1 = function () {
    console.log("Hello");
  };
}

// class Nums{
//     constructor(){
//         this.x = 100;
//         this.y = 200
//     }
//     show = function () {
//         console.log("Hello");
//       };
// }

Nums.prototype.show = function () {
  console.log("Hello");
};
Nums.prototype.show = function () {
  console.log("Hello");
};
Nums.prototype.show = function () {
  console.log("Hello");
};
Nums.prototype.show = function () {
  console.log("Hello");
};

const test = new Nums();

console.log(test instanceof Nums);

class Random {
  constructor(name) {
    this.name = name;
  }
  h1() {
    console.log(this.name);
  }
}
