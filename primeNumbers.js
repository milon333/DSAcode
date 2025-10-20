// PRIME NUMBERS
/* 1st approach: divide by all numbers from 2 to sqrt(num)
   optimised for small numbers < 1000
   main point: check until sqrt(num) & skip all even numbers
        sqrt(num) because any factors greater than sqrt(num) 
        will have a corresponding factor less than sqrt(num)
*/

// to check a number is prime
function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// return first N prime numbers
function getNPrimes(N) {
    if (N <= 0) return [];
    
    let primes = [];
    let num = 2; // Start from 2, the first prime number

    while (primes.length < N) {
        if (isPrimeNumber(num)) { 
            primes.push(num);
        }
        num++;
    }

    return primes;
}

// More efficient version using Sieve of Eratosthenes for larger numbers
/*
   optimised for large numbers > 1000
   main point: use a boolean array to mark non-prime numbers as false
   create a upper bound estimation from prime numbers formula N * log(N * log(N))
   Inner loop with j : executes only if i isn't marked false already
       starts with i*i -> smaller multiples will already be marked false
       checks until Upperbound & increments with multiples of i
   Outer loop with i : starts with 2 until square-root of upperBound[important]
*/
function getNPrimesEfficient(N) {
    if (N <= 0) return [];
    if (N === 1) return [2];
    
    // Estimate upper bound for N primes
    const upperBound = Math.max(10, Math.floor(N * Math.log(N * Math.log(N))));
    
    const sieve = new Array(upperBound + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for (let i = 2; i * i <= upperBound; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= upperBound; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    const primes = [];
    for (let i = 2; i <= upperBound && primes.length < N; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

console.log("First 10 primes (basic method):", getNPrimes(10));
console.log("First 10 primes (efficient method):", getNPrimesEfficient(10));
console.log("First 100 primes (efficient method):", getNPrimesEfficient(100));