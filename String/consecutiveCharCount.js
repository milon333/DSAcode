const input = "aaabbbddddddecccaaaabbdeffggg";

const consecutiveCharFreq = function(s) {
    if (!s) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            const charWithCount = count === 1 ? s[i] : s[i] + count;
            result += charWithCount;
            count = 1;
        }
    }

    return result;
}

const answer = consecutiveCharFreq(input);
console.log("answer :", answer);
