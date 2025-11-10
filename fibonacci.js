// generate fibonacci sequence

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
