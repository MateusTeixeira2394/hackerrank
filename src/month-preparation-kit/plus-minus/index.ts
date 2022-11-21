
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here

    let counter: number[] = [0, 0, 0]
    const elementsQtd: number = arr.length

    arr.forEach(value => {

        if (value > 0)
            counter[0]++;
        else if (value < 0)
            counter[1]++;
        else
            counter[2]++;

    });

    counter.forEach(current => {

        console.log((current / elementsQtd).toFixed(6))

    });

}

export default function main() {

    const arr: number[] = [-4, 3, -9, 0, 4, 1]

    console.log('\n Plus Minus exercie:')
    console.log('input', arr)
    console.log('output:')

    plusMinus(arr);
}