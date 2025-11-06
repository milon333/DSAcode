/**
 * @param {number} : num
 * @return {number}
 */
var reverseNumber = function(num) {
    
    let numCopy = num, reverseNum = 0, temp = 0;

    while (numCopy > 0) {
        temp = numCopy % 10;
        reverseNum = (reverseNum * 10) + temp;
        // parseInt to return only the number before decimal point
        numCopy = parseInt(numCopy/10);
    }

    return reverseNum;
};

/**
 * @param {string} : s
 * @return {string}
 */
var reversedString = function(s) {
    
    let left = 0, right = s.length - 1;
    let chars = s.split("");
    console.log(chars);

    while (right > left) {
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    return chars.join("");
};


/**
 * 
 * @param {number} : floatNum
 * @return {number}
 */
var reverseFloatingNumber = function(floatNum) {
    

    let numString = String(floatNum).split(".");
    let reverseNumLeft = reversedString(numString[0]);
    let reverseNumRight = reversedString(numString[1]);

    let reversedFloat = `${reverseNumLeft}.${reverseNumRight}`;
    reversedFloat = Number(reversedFloat);


    return reversedFloat;
};


// let answer = reverseNumber(535437667);
let answer = reverseFloatingNumber(0.2212)
console.log(answer);