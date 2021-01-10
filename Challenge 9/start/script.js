/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

function mult(object) {
  let {x, y, z} = object;
  let arr = Object.values(object);
  return arr.reduce((acc, elem) => acc * elem, 1)
}

// Write mult() function here

console.log(mult(obj));
// 300
