const input = ["i","love","leetcode","i","love","coding","coding"], k = 4;

const returnKFrequentWords = function(words, k) {

    const countMap = new Map();

    for (let word of words) {
        countMap.set(word, (countMap.get(word) + 1) || 1);
    }

    // sort count map based on their count
    const sorted = [...countMap.entries()].sort((a, b) => {
        // sort based on their alphabets; a[1] returns count; a[0] returns words
        if (a[1] === b[1]) return a[0].localeCompare(b[0]);

        // sort descending base on values
        return b[1] - a[1];
    });

    // required to return only values - array destructuring
    return sorted.slice(0, k).map(([word]) => word);
}

const answer = returnKFrequentWords(input, k);
console.log("answer :", answer);

// implement heap-based priority Queue version to optimise for large inputs
