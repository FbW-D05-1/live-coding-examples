// functions, this and args

let a = "test";

function myFunc() {
  console.log(arguments);
  // this.someProp = "hello";
  // console.log(this);
  // console.log(this.a);
}

myFunc({ name: "Mariam" }, "blue", false); // [Arguments] { '0': { name: 'Mariam' }, '1': 'blue', '2': false }
myFunc.call({ name: "Mariam" }, "blue", false); // [Arguments] { '0': 'blue', '1': false }
myFunc.apply({ name: "Mariam" }, ["blue", false]); // [Arguments] { '0': 'blue', '1': false }
new myFunc({ name: "Mariam" }, "blue", false); // [Arguments] { '0': { name: 'Mariam' }, '1': 'blue', '2': false }

// ----------##----------
// Objects and 'this'

const person = {
  name: "Alex",
  age: 33,
  city: "Berlin",
  getPersonInfo: function () {
    return `${this.name} he is: ${this.age} years old and live in ${this.city}`;
  },
  testThisKeyWordOnMethods: function () {
    return this.getPersonInfo();
  },
  moreInfo: {
    address: "Berliner Str.",
    postCode: 12345,
    getAddressInfo: function () {
      return this.address + " " + this.postCode;
    },
  },
};

// first way
console.log(person.name); // Alex

// 2nd way
console.log(person["city"]); // Berlin

// method
console.log(person.getPersonInfo());
console.log(person.testThisKeyWordOnMethods());
console.log(person.moreInfo.getAddressInfo());
