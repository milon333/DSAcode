const input = "((()))()(){[()]}]";

const isParanthesesValid = function(s){
     const l = s.length;

     if (l % 2 === 1) return false;
     if (s[0] === ")" || s[0] === "}" || s[0] === "]" ) return false;
     if (s[l-1] === "(" || s[l-1] === "{" || s[l-1] === "[" ) return false;

     const pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
     }
     const bracketStack = [];

     for (let i = 0; i < l; i++) {
        const bracket = s[i];
        if (s[i] === "(" || s[i] === "{" || s[i] === "[" ) {
            bracketStack.push(bracket);
        }
        else if (bracket !== pairs[bracketStack.pop()]) {
            return false;
        }
     }

     return bracketStack.length === 0 ? true : false;
};

const answer = isParanthesesValid(input);
console.log("answer : ", answer);


/* Points to remember :
    - make initial checks before traversiong
    - make corresponding pairs and empty stack
    - opening bracket to be pushed in stack
    - on encountering closing bracket
        1. Compare the closing bracket with pairs value of stack.pop
        2. if doesn't match false
        3. if matches go ahead
    - check if stack is empty
*/
