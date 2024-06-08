function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Adjust the window if currentSum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if we have found the target sum
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Test Cases
console.log(hasSubarrayWithSum([4, 2, 7, 1, 9, 5], 17)); // Expected: true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 15)); // Expected: true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 4)); // Expected: true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 20)); // Expected: false
console.log(hasSubarrayWithSum([-1, -2, -3, 7, 5], 2)); // Expected: true

const largeArray = new Array(100000).fill(1);
console.log(hasSubarrayWithSum(largeArray, 100000)); // Expected: true
