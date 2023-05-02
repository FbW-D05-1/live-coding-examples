// In dieser Datei steht unser eigentlicher Code, den wir schreiben sollen.
// Er wird durch die index.test.js und den darin enthaltenen Tests geprüft. Weitere Infos stehen in der Test-Datei.

// Erstes Ergebnis
// -------------------------
// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
//     if (number % 3 === 0) return "Fizz";
//     if (number % 5 === 0) return "Buzz";

//     return number;
// }

// Variante mit result-Variable
// -------------------------
// function fizzBuzz(number) {
//     let result = number;
//     if (number % 3 === 0 && number % 5 === 0) result = "FizzBuzz";
//     else if (number % 3 === 0) result = "Fizz";
//     else if (number % 5 === 0) result = "Buzz";

//     return result;
// }

// DRY - Don't repeat yourself
// -------------------------
// function fizzBuzz(number) {
//     let output = "";
//     if (number % 3 === 0) output = "Fizz";
//     if (number % 5 === 0) output += "Buzz";

//     return output || number;
// }

// Divide & Conquer 1
// -------------------------
// function fizzBuzz(number) {
//     const divisibleBy3 = number % 3 === 0;
//     const divisibleBy5 = number % 5 === 0;

//     if (divisibleBy3 && divisibleBy5) return "FizzBuzz";
//     if (divisibleBy3) return "Fizz";
//     if (divisibleBy5) return "Buzz";
//     return number;
// }

// Divide & Conquer 2
// -------------------------
function fizzBuzz(number) {
    if (divisibleBy(number, 3) && divisibleBy(number, 5)) return "FizzBuzz";
    if (divisibleBy(number, 3)) return "Fizz";
    if (divisibleBy(number, 5)) return "Buzz";
    return number;
}

// Zwei Varianten für die divisibleBy-Funktion
// --------
// function divisibleBy(number, modulo) {
//     return number % modulo === 0;
// }
const divisibleBy = (number, modulo) => number % modulo === 0;


module.exports = {
    fizzBuzz,
    divisibleBy,
};
