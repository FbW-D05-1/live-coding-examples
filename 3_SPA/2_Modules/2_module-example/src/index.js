// const randToken = require('rand-token');
// const Petals = require('petals');
// use above if type modules is removed from package json
import { generate } from "rand-token";
import Petals from "petals";

const token = generate(16);

const petalsTest = new Petals('{"firstName": "John", "lastName": "Doe"}');

console.log(petalsTest.JsonToXml());

console.log(token);
