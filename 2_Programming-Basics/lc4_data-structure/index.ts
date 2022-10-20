console.log("Hello typescript");
console.log(typeof NaN);

// compile => tsc 'nameoffile'.ts

let x: number = 3.3;
let y: string = "random";

const hosam: boolean = true; 

let array:[];

console.log(array);


let a:any;


type validType = number | string | boolean | null | object | undefined;

const addition = (n1: number, n2: string = "12") => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        console.log("Error: not a number");
        
    }
}
console.log(addition(2,"3"));


interface Inv {
    shape: string,
    color: string,
    size?: any, //without question mark undefined keys throw errors
}

interface newInvObject extends Inv {
    itemId: number,
}

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
