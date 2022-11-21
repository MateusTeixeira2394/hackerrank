"use strict";
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    // Write your code here
    var counter = [0, 0, 0];
    var elementsQtd = arr.length;
    arr.forEach(function (value) {
        if (value > 0)
            counter[0]++;
        else if (value < 0)
            counter[1]++;
        else
            counter[2]++;
    });
    counter.forEach(function (current) {
        console.log((current / elementsQtd).toFixed(6));
    });
}
function main() {
    var arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
}
main();
//# sourceMappingURL=index.js.map