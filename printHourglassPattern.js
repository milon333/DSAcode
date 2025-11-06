// hourglass

// k needs to be odd
printHourglassPattern = function(k) {

    // select i as per rows required; make a formula for spaces and stars
    for (let i = 0; i < Math.ceil(k/2); i++) {
        let spaces = " ".repeat(i);
        let stars = "*".repeat(k - (2*i));
        console.log(spaces + stars);
    }

    for (let i = Math.floor(k/2) - 1; i >= 0; i--) {
        let spaces = " ".repeat(i);
        let stars = "*".repeat(k-(2*i));
        console.log(spaces + stars);
    }
}

//printHourglassPattern(10);


/*
**********
 ********
  ******
   ****
    **
    **
   ****
  ******
 ********
**********
*/

function printHourglass(n) {
    if (n % 2 === 0) n++;
    const mid = Math.floor(n / 2);
    
    for (let i = 0; i < n; i++) {
        const distanceFromEdge = Math.min(i, n - 1 - i);
        console.log(' '.repeat(distanceFromEdge) + '*'.repeat(n - 2 * distanceFromEdge));
    }
}

printHourglass(7);
