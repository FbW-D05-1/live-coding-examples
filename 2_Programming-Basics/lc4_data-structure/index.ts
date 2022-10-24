console.log("Hello typescript");
console.log(typeof NaN);

// compile => tsc 'nameoffile'.ts

// let 'variable name' : 'type' = 'value'
let x: number = 3.3;
let y: string = "random";

const hosam: boolean = true; 

let array:[];

console.log(array);


let a:any;

// type takes in multiple typings and can be used everywhere
type validType = number | string | boolean | null | object | undefined;


const addition = (n1: validType, n2: string = "12") => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        console.log("Error: not a number");
        
    }
}
console.log(addition(2,"3"));

// interface creates placeholders for our object keys and value typings
interface Inv {
    shape: string,
    color: string,
    size?: any, //without question mark undefined keys throw errors
}

// extends takes the original interface and extends it to add extra keys n values without changing the original one
interface newInvObject extends Inv {
    itemId: number,
}

// const 'object name' : 'name of our interface' 
//if one of the keys and typings don't fit here there will be instantly and error
const obj: newInvObject = {
  itemId: 123,
  shape: "round",
  color: "red",
  size: true
}


interface DciStudsInterface {
    name: string,
    age?: number,
    role: string,
    isTeacher: boolean,
}
//creating an array with objects and using an interface for the nested objects
let DciStuds: DciStudsInterface[]= [
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
]

console.log(DciStuds[2].name);


/** interface for our object */
interface scblObj {
    tile: string,
    score: number,
}

/** our array of objects containing tiles and scores */
const scrabbleHand:scblObj[] = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];

/** function to check if an object is empty: returns a boolean */
function isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
}



isEmpty({});

