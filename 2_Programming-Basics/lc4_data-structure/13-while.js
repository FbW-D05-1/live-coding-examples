// While Loops

//  while (something is true){
//     Do something
//  }
// While that statement is true the code inside curly braces will run again and again and again and again...
// until that statement is no longer true

// i is equal to one and that is stored in our computers memory,
// we don't see that but our computer is holding that data for us.
let i = 1;

// Now the code goes to the while loop, and it will evaluate the statement in between the parentheses
while (i < 2) {
  //is i currently less than 2? well one is definitely less than 2 so this is true, statement == true that means our computer will execute the code in between the curly braces
  console.log(i); // will only console log our value
  i++; //this increments our i to 2
  //So now, after this loop is completed, then the code jumps back to the beginning of the loop and and it evaluates that condition again
  // and that means that this while loop will stop and it will skip the loop and go to the next line of code below
}

//this is how while loops work

//FizzBuzz with a while loop

const fizzBuzz = () => {
  let output = [];
  let count = 1;
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  return output;
};

console.log(fizzBuzz());

// !!! while loops are error prone they will run infinitely until the statement inside becomes false.

//if you made a mistake and forgot to add count++ and it never gets increased, then this statement(count <=) will always be true. Why? 1 is always going to be less than or equal 100
//if that happens the loop will run until eternety

//And what that means in practice, if you dare to try it is that your tab will hang and your terminal will throw a Fatal error

//Fun Fact: google 1 infinite loop on Apple Campus
//-----------------------------------------------------
// Practice while loop with lyrics from 99 bottles of beer

// https://www.99-bottles-of-beer.net/lyrics.html

// we need to create a function that will print out the lyrics as seen above with counting down from "99 bottles of beer on the wall..." until "no more bottles of beer..."

//I hope your answer wasn't writing down every step with single console.log at a time instead we will use while loop
function beer() {
  let bottles = 99;

  while (bottles >= 0) {
    if (bottles > 1) {
      console.log(
        bottles +
          " bottles of beer on the wall. Take one down and pass it around, " +
          (bottles - 1) +
          " bottles of beer on the wall."
      );
    }

    if (bottles === 1) {
      console.log(
        bottles +
          " bottle of beer on the wall. Take one down and pass it around, " +
          (bottles - 1) +
          " bottles of beer on the wall."
      );
    }

    if (bottles === 0) {
      console.log("No more bottles of beer on the wall");
    }

    bottles--;
  }
}

beer();

// Now a lot of people wonder in which cases do i use the while loop and in which cases should i use the for loop

// Keep in mind that while is essentially checking for a state, so it's while something is true, so that can be for example: while player one is alive, essentially you want to repeatedly run an instruction while the program is in a certain state.

// But for the for loop you're essentially trying to iterate.
// You're trying to run a piece of code many many times and you're going to use the for loop to define how many times.

// With practice you'll find that you'll gravitate torward one or the other type of loops while you're writing code with different purposes.
