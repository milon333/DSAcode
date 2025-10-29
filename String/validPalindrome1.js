// check if palindrome after removing non-alphanumeric chars and spaces
// convert all uppercase into lowercase letters
const input = null;
// "A man-a, a plan, a canal: Panama";

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {

    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (cleaned.length === 0 || cleaned.length === 1) return true;

    for (let l=0, r=cleaned.length - 1; l<r; l++, r--) {
        if(cleaned[l] !== cleaned[r]) return false;
    }

    return true;
}

const answer = validPalindrome(input);
console.log("answer : ", answer);
