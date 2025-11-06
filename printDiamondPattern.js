// n : number of rows
function printDiamondPattern(n) {

    const mid = Math.floor(n/2);

    // to print top half including mid line
    for (let i = 0; i <= mid; i++) {
        console.log(' '.repeat(mid - i) + '*'.repeat(1 + (2 * i)));
    }

    // to print bottom half
    for (let i = mid - 1; i >= 0; i--) {
        console.log(' '.repeat(mid - i) + '*'.repeat((2 * i) + 1))
    }

}

printDiamondPattern(10);
