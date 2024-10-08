// Question 17
// Implement a function that returns a memoized version of a function which accepts a single argument.

function memoize(fn) {
    const cache = {}; // Create a cache object to store results

    return function(arg) {
        // Check if the result is already in the cache
        if (cache.hasOwnProperty(arg)) {
            return cache[arg]; // Return the cached result
        }

        // Call the original function and store the result in the cache
        const result = fn(arg);
        cache[arg] = result; // Cache the result

        return result; // Return the result
    };
}

// Example usage:
function expensiveComputation(num) {
    console.log(`Computing result for ${num}...`);
    return num * 2; // Some expensive computation
}

const memoizedComputation = memoize(expensiveComputation);

console.log(memoizedComputation(5)); // Computing result for 5... 10
console.log(memoizedComputation(5)); // 10 (cached result)
console.log(memoizedComputation(10)); // Computing result for 10... 20
console.log(memoizedComputation(10)); // 20 (cached result)
