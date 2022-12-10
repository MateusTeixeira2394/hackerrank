'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here

    // The array to help the pairs counter
    let auxArr: number[] = []

    // The variable to count the number of pairs
    let pairsQtd: number = 0

    ar.forEach(cv => {

        // Check if the auxiliary array has any item with the 
        // same value of the current value. If so, get the index
        // of the item that has the same value.
        const index = auxArr.findIndex(value => value === cv)
        
        // If the auxiliary array hasn't any item with the same
        // value of the current value, add it into the array
        if (index === -1) { 
            auxArr.push(cv);
        } else {
            // Otherwise, increment the the pairs counter and
            // remove the found item from the auxiliary array
            pairsQtd++;
            auxArr.splice(index, 1);
        }

    });
    
    return pairsQtd;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
