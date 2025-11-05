// Minimum Number of Steps to Make Two Strings Anagram
// 1 step - will replace 1 char with another in string2

const str1 = "leetcode", str2 = "practice";

const minStepstoAnagram = function(s, t) {

    const base = 'a'.charCodeAt(0);
    // create an array to store char frequencies
    const charCount = new Array(26).fill(0);

    // loop over every character of both strings &
    // update count of chars + for s , - for t
    for (let i = 0; i < s.length; i++) {
        charCount[ s.charCodeAt(i) - base ]++;
        charCount[ t.charCodeAt(i) - base ]--;
    }

    // for every count > 0 we summ the count
    // ignore - counts as we are replacling in every step
    // if + & - both will be considered the result = count/2
    let count = 0;
    for (let i of charCount) if ( i > 0 ) count += i;

    return count;
}

const answer = minStepstoAnagram(str1, str2);
console.log("answer : ", answer);


// time complexity : O(n + 26);
//space complexity : O(26);