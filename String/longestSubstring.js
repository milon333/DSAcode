s = "There is Problem in the Solution";

const getLongestUniqueSubstring = function(s) {
    if ( s.length < 1 ) return "Invalid Input";

    let left = 0;
    maxLength = 0;
    const charMap = new Map();
    let maxSubstring = "";

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (charMap.has(char) && charMap.get(char) > left) {
            left = charMap.get(char) + 1;            
        }

        charMap.set(char, right);
        const currentLength = (right - left) + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.substring(left, right);
        }
    }

    return maxSubstring;
}

const answer = getLongestUniqueSubstring(s);
console.log("answer : " + answer);

/* Point to remember :
    left needs to be updated only when both conditions are true :
        - charMap has the char already &&
        - the index of char is greater than left [ if less tha left then left should not be updated]
*/
