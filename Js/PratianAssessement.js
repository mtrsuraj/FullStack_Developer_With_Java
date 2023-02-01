'use strict';

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

/*

 * Complete the 'simpleArraySum' function below.

 *

 * The function is expected to return an INTEGER.

 * The function accepts INTEGER_ARRAY ar as parameter.

 */

 

function simpleArraySum(ar) {

    // Write your code here
    // let sum;
    // let count=0;
    // let n = prompt("write your array size");
    // let n = ae;
    // const arr= [10, 12, 13];
        // ar[arTemp];
    for (let i=0; i<ar.length; i++) {
        sum += ar[i];
        arCount+=arCount;
    }
    // arCount+=arCount;

    // console.log(sum);

    return sum;

}

function main() {

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');
    // console.log(result);
    // ws.write(count+"\n");

    ws.end();

}
































