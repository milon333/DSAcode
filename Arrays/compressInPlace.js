// In place compression of chracters with their count
const input = ["a","b","b","b","b","b","b","b","b","b","b","b","b","c","c"];

/**
 * 
 * @param {string[]} chars
 * @returns {string[]} chars
 */
const compressInPlace = function(chars) {
    // need 2 pointers : left- position of array updation; right- traversing chars
    let count = 1;
    let left = 0;

    for (let right = 0; right < chars.length; right++) {
        // if equal keep moving right
        if (chars[right] === chars[right + 1]) {
            count++;
        } else {
            // if unequal replace left element with current char & increment left
            chars[left++] = chars[right];

            // frequency count should follow char only if greater than 1
            if (count > 1) {
                for (let idx of count.toString()) { // convert num to String
                    // digits need to be separated and replaced in chars Array
                    chars[left++] = idx;
                }
            }

            // reset count to 1 once inequal chars are found
            count = 1;
        }
    }

    // discard extra elements remaining to the end
    return chars.slice(0, left);
}

const answer = compressInPlace(input);
console.log("answer :", answer);
