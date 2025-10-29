// check if palindrome after removing atmost 1 character
const input = "racemycar";
// "A man-a, a plan, a canal: Panama";


/**
 * @param {string} : s
 * @returns {}
 */
const validPalindrome2 = function(s) {
    let l = 0, r = s.length - 1;

    const isPalindrome = (left, right) => {
        while(left < right) {
            if(s[left++] !== s[right--]) return false;
        }
    
        return true;
    };

    while(l < r) {
        if (s[l] !== s[r]) {
            return (isPalindrome(l+1, r) || isPalindrome(l, r-1));
        }
        l++;
        r--;
    }

    return true;
}

/* can be separated from main function :

function isPalindrome(s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
}
*/

const answer = validPalindrome2(input);
console.log("answer : ", answer);
