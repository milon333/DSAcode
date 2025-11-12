// generate fibonacci sequence

/**
 * Generates the first k numbers in the Fibonacci sequence
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Each number is the sum of the two preceding ones
 * @param {number} k - Number of fibonacci numbers to generate
 * @returns {number[]} Array of first k fibonacci numbers
 */
const getFibonacci = function(k) {
    if (k <= 0) return [];
    if (k === 1) return [0];

    const result = new Array(k);
    result[0] = 0;
    result[1] = 1;

    for (let i = 2; i < k; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result;
}

const answer = getFibonacci(10);
console.log("answer : ", answer);
