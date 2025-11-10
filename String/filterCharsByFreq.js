const input = "aadbbcccca", k = 4;

/** returns all chars that are repeated less than k times
 * without disturbing original order of chars in input
 * @param {string} : s
 * @param {number} : k
 * @returns {string}
 */
const filterCharactersByFrequency = function(s, k) {
    
    const charMap = new Map();
    let result = "";

    for (let char of s) { 
        charMap.set(char, (charMap.get(char) + 1) || 1);
    }

    for (let char of s) {
        if (charMap.get(char) < k) result = result + char;
    }

    return result;
};

const filterCharOneLiner = function(s, k) {

    const freq = {};
    for (let char of s) freq[char] = (freq[char] || 0) + 1;

    return [...s].filter(char => freq[char] < k).join("");
};


const answer1 = filterCharactersByFrequency(input, k);
const answer2 = filterCharOneLiner(input, k);
console.log("answer1 : ", answer1);
console.log("answer2 : ", answer2);
