// console.log("Hello World") 
// let username = 'suraj'
// console.log(username)

// let username= 'abc'
// console.log(username)
// let radius = 5
// const pi = 3.14
// // pi = 3.14
// let area = pi*radius * radius
// console.log(area)
// let num = 30
// let username = "suraj\tku\nmar"
// console.log(typeof(num))
// console.log( username
// let n=20;
// let userNumber = prompt("Enter number")

// for(let i=2;i<=userNumber; i+=2){
//     console.log(i*i)
//     // i+2;
// }

// var trainer ={
//     name : "xyz",
//     location : "bangalore",
//     age : 22,
//     salary : 10000,
//     isAvailable : true
// }

// alert(trainer)











'use stric';

const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf-8');

let inputString = '';

let currentLine = 0;

process.stdin.on('data', function(inputStdin) {

    inputString += inputStdin;

});

process.stdin.on('end', function() {

    inputString = inputString.split('\n');

    main();

});

function readLine() {

    return inputString[currentLine++];

}



let arr= [10,12,23, 13];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
   
}
// document.write(sum);
console.log(sum);


function main() {

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');
    console.log(result);
    ws.write(count+"\n");

    ws.end();

}
