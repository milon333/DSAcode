/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MOD = 1000000007;
    let primeCount = 0, nonPrimeCount = 0;
    let result = 1;
    const sieve = getPrimesCount(n);

    for (let i = 1; i < sieve.length; i++) {
        if (sieve[i]) {
            result *= ++primeCount;
        }
        else {
            result *= ++nonPrimeCount;
        }

        result = result % MOD;
    }

    return result;
};

function getPrimesCount(N) {
    const sieve = new Array(N + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= N; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= N; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve;
}

let answer = numPrimeArrangements(5);
console.log(answer);