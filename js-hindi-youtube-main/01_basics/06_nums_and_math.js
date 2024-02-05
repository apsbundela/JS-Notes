const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
let num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //random method return value b/w 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


/*
                      **** Math ****


Q What is Math in JS?

  The Math namespace object contains static properties and methods for mathematical constants and functions.
example print console.log(Math); on browser console you will get Object means Math is a Object
console.log(typeof Math); // Object

Q Tell any common Property of Math?

    Math.PI


Q Can we use Math for BigInt and string type?

Ans: Math works only with the Number type.


Q Can we use new operator with Math or can we create constructor of Math

And : Math is not a constructor. You cannot use it with the new operator 
      All properties and methods of Math are static.

*/
