console.log("Hello typescript");
console.log(typeof NaN);
// compile => tsc 'nameoffile'.ts
// let 'variable name' : 'type' = 'value'
let x = 3.3;
let y = "random";
const hosam = true;
let array;
console.log(array);
let a;
const addition = (n1, n2 = "12") => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        console.log("Error: not a number");
    }
};
console.log(addition(2, "3"));
// const 'object name' : 'name of our interface' 
//if one of the keys and typings don't fit here there will be instantly and error
const obj = {
    itemId: 123,
    shape: "round",
    color: "red",
    size: true
};
//creating an array with objects and using an interface for the nested objects
let DciStuds = [
    {
        name: "Kathrine",
        age: 24,
        role: "Student",
        isTeacher: false,
    },
    {
        name: "Ali",
        age: 24,
        role: "Student",
        isTeacher: false,
    },
    {
        name: "Sidar",
        age: 24,
        role: "Student",
        isTeacher: true,
    },
];
console.log(DciStuds[2].name);
//# sourceMappingURL=index.js.map