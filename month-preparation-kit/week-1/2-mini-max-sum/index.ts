'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getLowestPosition(arr: number[], firstIndex: number = 0): number {

    let lowestPosition: number = firstIndex;

    for (let i = firstIndex; i < arr.length; i++) {
        if (arr[i] <= arr[lowestPosition]) {
            lowestPosition = i
        }
    }

    return lowestPosition;

}

function switchValues(list: number[], index1: number, index2: number) {

    let aux: number = list[index1];
    list[index1] = list[index2];
    list[index2] = aux

}

function selectionSort(arr: number[]): void {

    for (let i = 0; i < arr.length - 1; i++) {

        const lowestIndex = getLowestPosition(arr, i);
        switchValues(arr, i, lowestIndex);

    }

}

function miniMaxSum(arr: number[]): void {
    // Write your code here

    let minSum: number = 0;
    let maxSum: number = 0;

    // order the list
    selectionSort(arr);

    // Sum the firts 4 elements and
    // the last 4 elements
    for (let i = 0; i < 4; i++) {

        minSum = minSum + arr[i];
        maxSum = maxSum + arr[arr.length - 1 - i]
    }

    // log the response
    console.log(minSum + ' ' + maxSum);

}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
