const nums = [1, 2, 9, 5, 3, 21, 11, 21];

/**
 * Find Kth largest number in an array using Min Heap approach
 * 
 * Time Complexity: O(n log k)
 *   - Iterate through n elements: O(n)
 *   - For each element, heap operations: O(log k)
 *   - Overall: O(n log k) where n is array length, k is the k value
 * 
 * Space Complexity: O(k)
 *   - Min heap stores at most k elements: O(k)
 *   - Better than O(n) when k << n
 */
let getKthLargestNum = function(inputArray, k) {
    if (!inputArray || inputArray.length === 0) return "Invalid Input";
    if (k < 1 || k > inputArray.length) return "Invalid K value";
    
    // Min heap to maintain k largest elements
    let minHeap = [];
    
    for (let num of inputArray) {
        if (minHeap.length < k) {
            // Add to heap if we don't have k elements yet
            minHeap.push(num);
            bubbleUp(minHeap);
        } else if (num > minHeap[0]) {
            // Replace the smallest element if current number is larger
            minHeap[0] = num;
            bubbleDown(minHeap);
        }
    }
    
    // The root of min heap is the kth largest element
    return minHeap.length > 0 ? minHeap[0] : "No kth largest found";
}

// Helper function to bubble up in min heap (for insertion)
function bubbleUp(heap) {
    let index = heap.length - 1;
    
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] <= heap[index]) break;
        
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
    }
}

// Helper function to bubble down in min heap (for extraction/replacement)
function bubbleDown(heap) {
    let index = 0;
    
    while (true) {
        let smallest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
            smallest = leftChild;
        }
        
        if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
            smallest = rightChild;
        }
        
        if (smallest === index) break;
        
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

// Test cases
console.log("Original array:", nums);
console.log("1st largest:", getKthLargestNum(nums, 1));  // Should be 21
console.log("2nd largest:", getKthLargestNum(nums, 2));  // Should be 11
console.log("3rd largest:", getKthLargestNum(nums, 3));  // Should be 9
console.log("4th largest:", getKthLargestNum(nums, 4));  // Should be 5
console.log("8th largest:", getKthLargestNum(nums, 8));  // Should be 1

// Edge cases
console.log("\nEdge Cases:");
console.log("Test [5, 5, 5] k=2:", getKthLargestNum([5, 5, 5], 2));
console.log("Test [-5, -3, -1] k=2:", getKthLargestNum([-5, -3, -1], 2));
console.log("Test invalid k:", getKthLargestNum(nums, 10));
console.log("Test empty array:", getKthLargestNum([], 1));

/* 
Approach Explanation:
1. Maintain a MIN HEAP of size k containing the k largest elements
2. For each number in the array:
   - If heap has less than k elements, add it
   - If current number > smallest element in heap, replace it
3. After processing all elements, the root of min heap is the kth largest

Why Min Heap?
- We want to quickly find the smallest among k largest elements
- Min heap gives O(log k) insertion/deletion and O(1) access to smallest element
- Better than sorting entire array when k << n
*/

