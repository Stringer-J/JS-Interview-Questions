// Question 5
// Implement a function that performs insertion sort.

function insertionSort(arr) {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // The current element to be positioned
        let j = i - 1; // Index of the last element in the sorted part

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the left
        }

        // Place current at the correct position
        arr[j + 1] = current;
    }

    return arr; // Return the sorted array
}

// Example usage
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
