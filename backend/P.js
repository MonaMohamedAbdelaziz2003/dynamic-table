// const s = Symbol('id');
// const obj = {};
// obj[s] = 42;
// console.log(obj);
// console.log(obj[s]);
// console.log("obj[s]");


// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// for (let name of["Ali", "Sara", "Mona"]) {
//     console.log(name);
// }

// const user = { name: "Mona", age: 21 };
// for (let key in user) {
//     console.log(key, user[valkeyue]);
// }
// const s = "Hello";
// const chars = [...s]; // ["H","e","l","l","o"]
// console.log(chars);


// const it2 = [1, 2, 3][Symbol.iterator]();
// const it = [1, 2, 3];
// console.log([...it]); // [1,2,3]
// console.log([...it2]); // []  <-- لأن الـ iterator انتهى
// console.log(it.next()); // []  <-- لأن الـ iterator انتهى


// function counter(step = 1) {
//     let count = 0;
//     console.log("count" + count)
//     return function() {
//         console.log("count" + count)
//         count += step;
//         return count;
//     }
// }
// const inc1 = counter(1);
// console.log(inc1()); // 1
// console.log(inc1()); // 2

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 10);
//     // setTimeout(function() { console.log(i); }, 10);
// }

// // console.log(x);
// // let x = 5;
// // ظظظظظظظ

// let x = "outside";

// function printX() {
//     console.log(x);
// }

// function run() {
//     var x = "inside";
//     printX();
// }

// run(); // ?

// // ظظظظظظظظظظظظظ

// let a = 10;

// function outer() {

//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();
// ظظظظظظظظظظظظ

// var greeting = "Hello";
// console.log(greeting);
// greeting = .
// "Hi";


// function saySomething(greeting, greeting) {
//     "use strict";
//     console.log(greeting);
// }


// function badIdea() {
//     eval("var oops");
//     console.log(oops);
// }
// badIdea(); // Ugh!

// if (true) {
//     var badIdea = { oops: "Ugh!" };
//     // var oops = "mm"
// }

// with(badIdea) {
//     console.log(oops); // Ugh!
// }

// var studentName = "Suzy";

// function printStudent(studentName) {
//     studentName = studentName.toUpperCase();
//     console.log(studentName);
// }

// printStudent("mona")



// var special = 42;

// function lookingFor(special) {

//     function keepLooking() {
//         var special = 3.141592;
//         console.log(special);
//         console.log(window.special);
//     }

//     keepLooking();
// }

// lookingFor(112358132134);


// var ask = function ofTeacher() {
//     console.log(ofTeacher);
// };
// ask();
// console.log(ofTeacher);

// greet();
// console.log(greet)
// var greet = function() {
//     console.log("Hello!");
// };

// var studentName = "Frank";
// console.log(studentName);

// var studentName;
// console.log(studentName);

// var studentName = undefined;
// console.log(studentName); // undefined ❌


var greeting;

function greeting() {
    console.log("Hello!");
}
var greeting;
console.log(typeof greeting)
var greeting = "Hello!";
console.log(typeof greeting)

let student = "Suzy";

function ask() {
    console.log(student); // ❌ ReferenceError
}

ask();

var x = 10;
var x = 20;
console.log(x); // 10