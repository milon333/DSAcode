// return the char count in the string - o/p : A1p2l1e1
const input = "MilonKumarPanda"

const getCharFreq = function(s) {
    const charMap = new Map();
    let result = "";

    for (let char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (let [key, value] of charMap) {
        result += key + value;
    }

    return result;

    // 1 liner
    // return Array.from(charMap, ([char, count]) => char + count).join("");
}

const answer = getCharFreq(input);
console.log("answer :", answer);
