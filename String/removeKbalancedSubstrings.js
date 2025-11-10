const input = ")(((())))()()()(", k = 2;

const removeKbalancedSubstrings = function(s, k){
    if (k === 0) return s;

    let charStack = [];

    for (let char of s) {

        charStack.push(char);


        if (charStack.length >= 2*k) {
            let isKbalanced = true;
            const l = charStack.length;

            for (let i = l - 1; i >= l - k; i--) {
                if (charStack[i] !== ")") {
                    isKbalanced = false;
                    break;
                }
            }

            if (isKbalanced) {
                for (let i = l - k - 1; i >= l - (2*k); i--) {
                    if (charStack[i] !== "(") {
                        isKbalanced = false;
                        break;
                    }
                }
            }

            if (isKbalanced) {
                charStack.splice(l-(2*k), 2*k);
            }
        }
    }

    return charStack.join('');
}

const answer = removeKbalancedSubstrings(input, k);
console.log("answer : ", answer);


/* Points to remember :
    1. push chars in stack
    2. after push check if stack length >= 2k [ no point checking before that]
    3. 1st check - iteratively check last k chars are ) - closing brackets
    4. 2nd check - check next set of k chars from end are ( - opening brackets
    5. if both check pass - splice the last 2k characters of stack
    6. maintain a flag - isKbalanced to progressively do the checks or false to skip checks
    7. don't forget to join the array
*/
