// Question 7
// Implement a function that acts like setInterval but returns a function to cancel the Interval.

function customSetInterval(callback, interval) {
    let intervalId = setInterval(callback, interval);

    // Return a function to cancel the interval
    return function cancel() {
        clearInterval(intervalId); // Clear the interval
    };
}

// Example usage:
const cancelInterval = customSetInterval(() => {
    console.log("This message will appear every second");
}, 1000);

// To cancel the interval after 5 seconds
setTimeout(() => {
    cancelInterval();
    console.log("Interval has been canceled.");
}, 5000);
