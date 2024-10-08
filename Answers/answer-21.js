// Question 21
// Implement a debounce function that comes with a cancel method to cancel delayed invocations.

function debounce(fn, delay) {
    let timeoutId;

    const debouncedFunction = (...args) => {
        // Clear the previous timeout
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            fn(...args); // Call the original function with the provided arguments
        }, delay);
    };

    // Cancel method to clear the timeout
    debouncedFunction.cancel = () => {
        clearTimeout(timeoutId); // Clear the timeout
    };

    return debouncedFunction;
}

// Example usage:
const log = (message) => {
    console.log(message);
};

const debouncedLog = debounce(log, 1000);

// Call the debounced function multiple times
debouncedLog("Hello, World!");
debouncedLog("Hello again!");

// Cancel any pending invocation
debouncedLog.cancel();
