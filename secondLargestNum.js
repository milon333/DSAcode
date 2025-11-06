const nums = [1, 2, 9, 5, 3, 21, 11, 21];

let getSecondLargestNum = function(inputArray) {
    if (inputArray.length < 2) return "Invalid Input";

    // Initialize with -Infinity to handle any numeric values
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    // Single pass through entire array
    for (let num of inputArray) {
        
        if (num > largestNum) {
            secondLargestNum = largestNum;
            largestNum = num;
        } else if (num > secondLargestNum && num !== largestNum) {
            secondLargestNum = num;
        }
    }

    // Handle case where second largest wasn't updated (all same values or insufficient distinct values)
    if (secondLargestNum === -Infinity) {
        return "No second largest found";
    }

    return secondLargestNum;
}


let Answer = getSecondLargestNum(nums);
console.log("Answer:", Answer);

// Test edge cases
console.log("Test [-5, -3, -1]:", getSecondLargestNum([-5, -3, -1]));
console.log("Test [5, 5, 5]:", getSecondLargestNum([5, 5, 5]));

/* initialization of largest & second largest vars needs to be correct - 
      to handle 0 & negative values.
   The else if condition needs to check !== to largestNum -
      to avoid wrong answer in case of repeated largest Num
*/
