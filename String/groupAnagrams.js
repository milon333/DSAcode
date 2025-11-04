// Given an array of strings strs, group the anagrams together
const input = ["eat","tea","tan","ate","nat","bat"];

/**
 * @param {string[]} strs
 * @returns {string[]}
 */
const groupAnagrams = function(strs) {

    // map to store the sorted word as key & actual words as values
    const anagramsMap = new Map();

    for (let word of strs) {
        let key = word.split("").sort().join("");
        // create an empty array in values if key is nor present
        if (!anagramsMap.has(key)) anagramsMap.set(key, []);

        anagramsMap.get(key).push(word);
    }

    // convert the values into an array
    return [...anagramsMap.values()];
}

const answer = groupAnagrams(input);
console.log("answer :", answer);

/* time complexity - O(n . klog k) - 
    - traversing & sorting each word of length k
   space complexity - O(n.k) -
    - key of length k is created per word
*/


const groupAnagramswithCount = function(strs) {

    const wordMap = new Map();

    for (let word of strs) {
        const charCount = new Array(26).fill(0);

        for (let char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = charCount.join("#");
        if (!wordMap.has(key)) wordMap.set(key, []);

        wordMap.get(key).push(word);
    }

    return [...wordMap.values()];
}

const answer2 = groupAnagramswithCount(input);
console.log("answer2 :", answer2);

/* time complexity - O(n . k) - 
    - traversing & sorting each word of length k
   space complexity - O(n.k) -
    - key of length k is created per word
*/
