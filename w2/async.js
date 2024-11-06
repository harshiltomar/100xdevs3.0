// function sum(a,b) {
//     return a + b;
// }

const { resolve } = require("path");

// let ans = sum(1,2);
// console.log(ans);


// function sum(num) {
//     let ans = 0;
//     // for ( let i=0; i<= 100; i++) {
//     //     ans += i;
//     // }

//     ans = (num * (num +1 ))/2;

//     return ans;
// }

// let ans = sum(100);
// console.log(ans);

// function sum(num) {
//     return new Promise(()=> {
//         setTimeout(()=> {
//             const ans = (num * (num +1))/2;

//             return ans;
//         }, 3000)
//     })
// }

// sum(100).then((ans)=> {
//     console.log(ans);
// })

// The Nodejs fs module is used to read the contents of a file.
//const fs = require("fs");

// The utf-8 encoding is used to read the file contents. The normal file is read as a buffer. ( array of bytes )
// const data = fs.readFileSync("a.txt", "utf-8");
// const data2 = fs.readFileSync("b.txt", "utf-8");
// console.log(data, data2);

// function sum(a,b) {
//     return a + b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// function divide(a,b) {
//     return a / b;
// }

// function doOperation(a,b,op) {
//     return op(a,b);
// }

// let ans2 = doOperation(100,100,multiply);

// let ans = doOperation(100,100,sum);
// console.log(ans, ans2);

// const fs = require("fs");

// function readFileCallback(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }

// const data = fs.readFile("a.txt", "utf-8", readFileCallback);
function run () {
    console.log("I will run after 1 second");
}
setTimeout(run, 1000);
console.log("I will run immediately");