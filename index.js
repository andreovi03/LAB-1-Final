const mult = require("poly-mult")
console.log(mult([1, 2], [1, 0, 1]))


const color= require("color")
console.log(color.cmyk().round().array());  // [ 16, 25, 0, 8, 0.5 ]
console.log(color.ansi256().object()); 