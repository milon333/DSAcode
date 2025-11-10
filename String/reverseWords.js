// Return a string of the words in reverse order concatenated by a single space.
// string may contain leading, trailing as well as extra spaces in middle
// output should not have those extra spaces
const input = " the sky is   blue"

const reverseWords = function(s) {

    const cleaned = s.trim().split(/\s+/);

    for (let l = 0, r = cleaned.length - 1; l < r; l++, r--) {
        const temp = cleaned[r];
        cleaned[r] = cleaned[l];
        cleaned[l] = temp;
    }

    return cleaned.join(" ");
}

const answer = reverseWords(input);
console.log("answer: ", answer);
