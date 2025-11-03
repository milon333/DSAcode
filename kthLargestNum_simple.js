const nums = [1, 2, 9, 5, 3, 21, 11, 21];

/**
 * Find Kth largest number using sorting (simpler approach)
 * @param {number[]} : inputArray
 * @param {number} : k
 * @returns {number}
 */
let getKthLargestNumSimple = function(inputArray, k) {
    if (!inputArray || inputArray.length === 0) return "Invalid Input";
    if (k < 1 || k > inputArray.length) return "Invalid K value";
    
    // Sort in descending order
    let sorted = inputArray.slice().sort((a, b) => b - a);
    
    // Get kth element (k-1 because array is 0-indexed)
    return sorted[k - 1];
}


console.log("1st largest:", getKthLargestNumSimple(nums, 1));
console.log("2nd largest:", getKthLargestNumSimple(nums, 2));
console.log("3rd largest:", getKthLargestNumSimple(nums, 3));
console.log("4th largest:", getKthLargestNumSimple(nums, 4));

console.log("Test [5, 5, 5] k=2:", getKthLargestNumSimple([5, 5, 5], 2));
console.log("Test [-5, -3, -1] k=2:", getKthLargestNumSimple([-5, -3, -1], 2));

/* 
* Time Complexity: O(n log n)
*   - Sorting the array: O(n log n) where n is the array length
*   - Accessing kth element: O(1)
*   - Overall: O(n log n)
* 
* Space Complexity: O(n)
*   - Creating a copy of the array with slice(): O(n)
*   - Note: Could be O(1) if you sort in-place, but then you modify original array
*/
