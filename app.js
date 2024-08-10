require("./xyz.js"); // one module into another
const sum = require("./sum.js"); // one module into another
const name = "Namaste Node JS";
const a = 6;
const b = 5;
console.log(name);
console.log(sum.calculateSum(a, b), sum.x);
