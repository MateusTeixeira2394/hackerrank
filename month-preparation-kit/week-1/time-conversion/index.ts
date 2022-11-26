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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


function startPad(value: number, targetLength: number): string {

    let str: string = value.toString();

    while (str.length < targetLength) {
        str = '0' + str
    }

    return str;
}


function timeConversion(s: string): string {
    // Write your code here

    const AM: string = 'AM';
    const PM: string = 'PM';

    // To help the time string
    let time: string = s;

    // Flag to inform if the time is PM or not
    let isPM: boolean = false;

    // Remove the substring 'AM'
    time = time.replace(AM, '');

    // Check if there is substring 'PM'
    // inside the time string. If so,
    // remove the substring 'PM'
    if (time.indexOf(PM) !== -1) {
        time = time.replace(PM, '');
        isPM = true;
    }

    let timeSplited: string[] = time.split(':');

    let hour: number = parseInt(timeSplited[0]) % 12;

    if (isPM) hour = hour + 12;
    
    timeSplited[0] = startPad(hour, 2);

    return timeSplited.join(':');

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
