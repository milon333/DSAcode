const input = [-1,0,1,2,-1,-4,0,4,-2,0,0,0,0,-1,-1];

/**
 * here target sum = 0;
 * @param {number[]} nums
 * @returns {number[][]} array of number arrays with each array a triplet of numbers
 */
const threeSumWithSet = function(nums) {

    // use set to avoid duplicate triplets
    const resultSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        // to store numbers which we are going to lookup for our target
        const numSet = new Set();

        // iterate j from i+1 to end
        for (let j = i+1; j < nums.length; j++) {
            const sum = -(nums[i] + nums[j]);

            // if the sum number is present in the set
            if (numSet.has(sum)) {
                let triplet = [nums[i], nums[j], sum];
                // sort the array to avoid duplicates
                triplet.sort((a,b) => a-b);
                // arrays are reference based hence we need to convert the arrays
                // into individual strings to avoid duplicates
                resultSet.add(triplet.join(","));
            }

            // keep adding numbers at j into the number set
            numSet.add(nums[j]);
        }
    }

    // spread the elements of resultSet, for each string of triplets
    // split into array based on comma & convert each number of the array to Number
    return [...resultSet].map(str => str.split(",").map(Number));
}


const threeSum2Pointer = function(nums) {
    // sort the nums array once to avoid sorting each triplets
    nums.sort((a,b) => a-b);

    const result = [];

    // iterate i until 3rd last element of array 
    for (let i= 0; i < nums.length - 2; i++) {

        // this is not applicable if target sum != 0
        if (nums[i] > 0) break;

        // continue if it isn't 1st element && previous element is same as current
        if (i > 0 && nums[i] == nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        // since array is sorted we need to move only till j < k
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else { // if sum equals target which is 0 here
                result.push([nums[i], nums[j], nums[k]]);

                // keep moving j & k until j is not same as previous element
                // k is not same as next element
                j++, k--;
                while (j < k && nums[j] == nums[j-1]) j++;
                while (j < k && nums[k] == nums[k+1]) k--;
            }
        }
    }

    return result;
}

const answer = threeSumWithSet(input);
console.log("answer: ", answer);
