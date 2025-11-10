const input = "a4b2c3d12a3d4e2";

const expandCharFreqCount = function(s) {
    if (!s) return "";

    let result = "";
    let i = 0;

    // don't use for loop as i will need to incremented as per the string
    while (i < s.length) {
        // save the char & increment i to go to the digit
        let char = s[i++];

        // nums needs to built in case of multiple digits
        let nums = "";
        // the test will result in true or false until the match
        // needed to collect all digits
        while (i < s.length && /\d/.test(s[i])) {
            nums += s[i++];
        }

        // once the digits match completes, convert to number
        const count = parseInt(nums);
        result += char.repeat(count);
    }

    return result;
}

const answer = expandCharFreqCount(input);
console.log("answer :", answer);
