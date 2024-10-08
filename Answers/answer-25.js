// Question 25
// Implement a function to resolve a given value to a Promise.

function resolveToPromise(value) {
    return Promise.resolve(value);
}

// Example usage:
resolveToPromise(42).then(result => {
    console.log(result); // Output: 42
});

resolveToPromise("Hello").then(result => {
    console.log(result); // Output: "Hello"
});

const existingPromise = new Promise((resolve) => {
    setTimeout(() => resolve("I'm a Promise!"), 1000);
});

resolveToPromise(existingPromise).then(result => {
    console.log(result); // Output: "I'm a Promise!" after 1 second
});
