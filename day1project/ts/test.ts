// Type Annotation (Explicit)
let v1:string = "My Test";
console.log(v1);
console.log("Testing...");

// Type Inferring (Implicit)
let s = "Satya";
console.log(s);
// s = 50;

// Define a function to add
function add(a:number, b:number) :number {
    return a+b;
}

// Use
// s = add(3, 5);
// let n1 = add("3", 10);

// Array of numbers
let nums:number[];
let v3:Function;
// v3=true;
v3 = function(){
    return "Anonymous Function";
}

v3 = add;
v3 = () => "Arrow Function Message";

let v4 = (x:number, y:number) => x+y;
