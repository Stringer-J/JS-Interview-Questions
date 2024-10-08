// Question 23
// Implement a function that recursively flattens an array into a single level deep.

function flattenArray(arr) {
    let result = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            // If the item is an array, recursively flatten it
            result = result.concat(flattenArray(item));
        } else {
            // If the item is not an array, add it to the result
            result.push(item);
        }
    });

    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
