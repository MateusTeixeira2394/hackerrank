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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


function pangrams(s: string): string {
    // Write your code here

    let alphabet: string[] = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    // Remove all the spaces of the string, turn all character
    // into a lower case and split each character
    let splitted: string[] = s
        .replace(/\s+/g, "")
        .toLocaleLowerCase()
        .split('');

    splitted.forEach(cv => {

        // each character in the list will remove the corresponding
        // letter from the alphabet
        alphabet = alphabet.filter(char => char !== cv);
        
    });

    // If there are any characters left in the alphabet variable,
    // it is because the string isn't a pangram
    if (alphabet.length > 0) {
        return 'not pangram';
    };

    return 'pangram';
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
