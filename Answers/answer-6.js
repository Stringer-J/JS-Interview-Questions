// Question 6
// Implement a function that returns a memoized version of a function which accepts any number of arguments.

function memoize(fn) {
    const cache = new Map(); // Create a cache to store results

    return function(...args) { // Return a new function that takes any number of arguments
        const key = JSON.stringify(args); // Create a unique key based on the arguments

        if (cache.has(key)) {
            return cache.get(key); // Return cached result if it exists
        }

        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in cache
        return result; // Return the result
    };
}

// Example usage:
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Calculates and returns 3
console.log(memoizedAdd(1, 2)); // Returns cached result: 3
console.log(memoizedAdd(2, 3)); // Calculates and returns 5
