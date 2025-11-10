// Find the longest contiguous subarray that contains at most k distinct values.
// if k is given as 2, bi-valued Subarray

const input = [-1, -2, -3, -1, -3, -2, -3];
// [1, 1, 2, 1, 3, 3, 3, 3, 3]

/**
 * @param {number[]} : nums
 * @param {number} : k
 * @return {number}
 */
const longestBivalueSubarray = function(nums, k) {

    let left = 0;
    let maxLength = 0;
    const numCount = new Map();
    const resultSet = new Set();


    for (let right = 0; right < nums.length; right++) {

        // add digit & count in map
        const digit = nums[right];
        numCount.set(digit, (numCount.get(digit) || 0) + 1);

        // increment left pointer until map has 2 keys
        while (numCount.size > k) {
            const leftDigit = nums[left];
            numCount.set(leftDigit, numCount.get(leftDigit) - 1);

            if (numCount.get(leftDigit) === 0){
                numCount.delete(leftDigit);
            }

            left++;
        }

        const currentLength = (right - left) + 1;

        // if there is a new maxLength clear the set
        if (currentLength > maxLength) {
            resultSet.clear();
            maxLength = currentLength;
        }
        if (currentLength === maxLength) {
            resultSet.add(JSON.stringify(nums.slice(left, right + 1)));
        }

        
    }

    return [...resultSet].map(JSON.parse);
    // return maxLength;
}

const answer = longestBivalueSubarray(input, 2);
console.log("answer : ", answer);
