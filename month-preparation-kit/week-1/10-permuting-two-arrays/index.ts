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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function getLowestPosition(
    list: number[],
    startPosition: number = 0
): number {

    let lowestPosition: number = startPosition;

    for (let i = startPosition; i < list.length; i++) {

        if (list[i] < list[lowestPosition]) {
            lowestPosition = i;
        };

    };

    return lowestPosition;

}

function switchElements(posA: number, posB: number, list: number[]): void {

    let aux: number = list[posA];
    list[posA] = list[posB];
    list[posB] = aux;

}

function selectionSort(list: number[]): number[] {

    let copyList: number[] = [...list];

    for (let i = 0; i < copyList.length; i++) {

        const lowestPosition: number = getLowestPosition(copyList, i);

        switchElements(i, lowestPosition, copyList);

    };

    return copyList;

};

function checkArrays(A: number[], B: number[], k: number): string {

    const YES: string = "YES"
    const NO: string = "NO"

    let response: string = YES;

    for (let i = 0; i < A.length; i++) {

        if (A[i] + B[i] < k) {
            response = NO;
            break;
        };

    };

    return response;

}

function twoArrays(k: number, A: number[], B: number[]): string {
    // Write your code here

    return checkArrays(
        selectionSort(A),
        selectionSort(B).reverse(),
        k
    );
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const k: number = parseInt(firstMultipleInput[1], 10);

        const A: number[] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B: number[] = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result: string = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}
