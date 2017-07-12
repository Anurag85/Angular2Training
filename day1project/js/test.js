"use strict";
// Type Annotation (Explicit)
var v1 = "My Test";
console.log(v1);
console.log("Testing...");
// Type Inferring (Implicit)
var s = "Satya";
console.log(s);
// s = 50;
// Define a function to add
function add(a, b) {
    return a + b;
}
// Use
// s = add(3, 5);
// let n1 = add("3", 10);
// Array of numbers
var nums;
var v3;
// v3=true;
v3 = function () {
    return "Anonymous Function";
};
v3 = add;
v3 = function () { return "Arrow Function Message"; };
var v4 = function (x, y) { return x + y; };
