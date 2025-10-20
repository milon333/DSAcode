/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MOD = 1000000007;
    const primesCount = getPrimesCount(n);
    const nonPrimesCount = n - primesCount;

    const primeFactorial = factorialMod(primesCount, MOD);
    const nonPrimeFactorial = factorialMod(nonPrimesCount, MOD);

    const totalArrangements = mulMod(primeFactorial, nonPrimeFactorial, MOD);
    return totalArrangements;
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

    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (sieve[i]) count++;
    }
    return count;
}

/**
 * Safe factorial under modulo (no BigInt)
 */
function factorialMod(num, MOD) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = mulMod(result, i, MOD);
    }
    return result;
}

/**
 * Safe modular multiplication using 64-bit decomposition
 */
function mulMod(a, b, mod) {
    // break multiplication into smaller parts to avoid overflow
    let result = 0;
    a = a % mod;
    while (b > 0) {
        if (b % 2 === 1) {
            result = (result + a) % mod;
        }
        a = (a * 2) % mod;
        b = Math.floor(b / 2);
    }
    return result;
}


let answer = numPrimeArrangements(100);
console.log(answer);