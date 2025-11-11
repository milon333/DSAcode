const input = [0,3,7,2,5,8,4,6,0,1,10,20, 9];

/** return the length of longest consecutive elements sequence
 * @param {number[]} : nums
 * @returns {number} : length of output array
 */
const longestConsecutive = function(nums) {

    if (!nums || nums.length === 0) return 0;

    // to remove duplicates and later use for efficient lookups O(1)
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // choose starting point : num - 1 does not exist
        if (!numSet.has(num - 1)) {
            // create length & currentNum every time starting point is found
            let length = 1;
            let currentNum = num;

            // increment length & the currentNum until sequence exists
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            maxLength = Math.max(length, maxLength);
        }
    }

    return maxLength;
}

const answer = longestConsecutive(input);
console.log("answer :", answer);
