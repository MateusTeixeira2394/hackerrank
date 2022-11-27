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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function getLeftDiagonalSum(arr: number[][]): number {

    // Accumulator
    let acc: number = 0;

    arr.forEach((ce, index) => {

        // accumulate the diagonal value
        acc = acc + ce[index];

    });

    return acc;
}

function getRirghtDiagonalSum(arr: number[][]): number {

    // Accumulator
    let acc: number = 0;

    arr.forEach((ce, index) => {

        acc = acc + ce[ce.length - 1 - index]

    });

    return acc;
}

function absolute(value: number): number {

    return Math.sqrt(Math.pow(value, 2));

}

function diagonalDifference(arr: number[][]): number {
    // Write your code here

    const leftDiagonalSum: number = getLeftDiagonalSum(arr);

    const rirghtDiagonalSum: number = getRirghtDiagonalSum(arr);

    return absolute(leftDiagonalSum - rirghtDiagonalSum);

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
