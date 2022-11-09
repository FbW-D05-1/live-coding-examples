// Lexical Scoping defines how variable names are resolved in nested functions:
// inner functions contain the scope of parent functions even if the parent function has returned.
// static scope: lexical scope is also static scope because no matter from where the function is called, the lexical scope of the variable used in that function will alsways remain the same

// A colsure is always a nested function
// CLOSURE is a function which encloses a variable from it's parents' scope. This behaviour is also known as lexical scope.
// The closure is a collection of variables which were in scope at the time of ceation of the nested function.
// It is also called a MEMORY FUNCTION because it remhttps://prod.liveshare.vsengsaas.visualstudio.com/join?5C1B55D1949D44FD7D3F75B8BFA31ED5C1E6

let myVar = "ich bin global";
const myFunction = () => {
  console.log(myVar);
};

const outerFunction = () => {
  let myVar = "I am a local scope!";

  const innerFunction = () => {
    const inceptionFunction = () => {
      console.log("reeee");
    };
    return inceptionFunction;
  };

  return innerFunction;
};
outerFunction()(); //second nested function
outerFunction()()(); //third nested function

// https://stackoverflow.com/questions/1047454/what-is-lexical-scope
// AAA
