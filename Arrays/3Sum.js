const input = [-1,0,1,2,-1,-4,0,4,-2,0,0,0,0,-1,-1];

/**
 * here target sum = 0;
 * @param {number[]} nums
 * @returns {number[][]} array of number arrays with each array a triplet of numbers
 */
const threeSumWithSet = function(nums) {

    const resultSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const numSet = new Set();

        for (let j = i+1; j < nums.length; j++) {
            const sum = -(nums[i] + nums[j]);

            if (numSet.has(sum)) {
                let triplet = [nums[i], nums[j], sum];
                triplet.sort((a,b) => a-b);
                resultSet.add(triplet.join(","));
            }

            numSet.add(nums[j]);
        }
    }

    return [...resultSet].map(str => str.split(",").map(Number));
}


const threeSum2Pointer = function(nums) {
    nums.sort((a,b) => a-b);

    const result = [];

    for (let i= 0; i < nums.length; i++) {

        if (i > 0 && nums[i] == nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                result.push([nums[i], nums[j], nums[k]]);

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
