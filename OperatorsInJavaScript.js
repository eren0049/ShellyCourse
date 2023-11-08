// Comparasion Operators in JS
// learn the type
let x= true;
console.log(typeof(x))


// comparison === operator
// compares value and type of objects

// Comparison of Number
let a = 5;
let b = 10;
console.log(a < b);    // result :  true
console.log(a > 0);    // result :  true
console.log (a < 100); // result :  false
console.log(a == "5"); // result :  true 
console.log(a <= 5);   // result :  true 
console.log(a === b);  // result :  false

//comparison of String 
let c = "abc";
let d = "abd";
console.log(c < d);
console.log(c > "ab");    // true because a is longer than "ab"
console.log(c > "abcd");  // false because is shorted than "abed
console.log (c < c);
console.log(c !== d);
console.log(c === d);


// Logical Operators in JS
// && operator 
let e = 6;
console.log (e > 5 && e < 10 && e % 2 == 0); // true

// || operator
let word = "Example";
console. log(word == "Example" || word == "Demo") //true