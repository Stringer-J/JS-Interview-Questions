// Question 28
// Implement a promisify function that allows the original function to override the return value.

function promisify(originalFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            try {
                // Call the original function with provided arguments
                const result = originalFunction(...args);
                
                // Resolve the promise with the original result or override it
                resolve(result); // This can be overridden as needed
            } catch (error) {
                // Reject the promise if an error occurs
                reject(error);
            }
        });
    };
}

// Example usage
const originalFunction = (a, b) => {
    // You can implement logic here to decide the return value
    return a + b; // Simple example: returns the sum
};

// Promisify the original function
const promisifiedFunction = promisify(originalFunction);

// Using the promisified function
promisifiedFunction(2, 3)
    .then(result => {
        console.log("Result:", result); // Output: Result: 5
    })
    .catch(error => {
        console.error("Error:", error);
    });
