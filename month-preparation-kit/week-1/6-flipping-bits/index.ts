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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */



// Turn a decimal number into binary
function decToBin(decimal: number): string {

    const remainder: number = decimal % 2

    const product: number = (decimal - remainder) / 2

    if (product == 1) {
        return '1' + remainder.toString();
    };

    if (product == 0) {
        return '0' + remainder.toString();
    };

    return decToBin(product) + remainder.toString();

}

// Fill the value string with character until the length
function padStart(
    value: string,
    character: string,
    length: number
): string {

    let response: string = value;

    while (response.length < length) {

        response = character + response

    }

    return response
}

// Flip all bits
function flipBits(bin: string): string {

    return bin.split('').map(cv => (+(cv === '0')).toString()).join('')

}

// Turn a binary number into a decimal one
function binToDec(bin: string): number {

    const reverseArr: number[] = bin.split('').reverse().map(cv => parseInt(cv));

    return reverseArr.reduce((pv, cv, i) => pv + cv * Math.pow(2, i));

}

function flippingBits(n: number): number {
    // Write your code here

    // Turn the n into a binary number
    let bitNumber: string = decToBin(n);

    // Fill the binary number with zeros until 32 places
    let bit32Number: string = padStart(bitNumber, '0', 32);

    // Flipp each number of array and save them into the variable
    let flippedBits: string = flipBits(bit32Number);

    return binToDec(flippedBits);

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        const result: number = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
