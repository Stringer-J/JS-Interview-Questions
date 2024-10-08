// Question 14
// Implement a function that creates a resumable interval object.

class ResumableInterval {
    constructor(callback, interval) {
        this.callback = callback; // Function to call on interval
        this.interval = interval;   // Interval time in milliseconds
        this.isRunning = false;     // Flag to check if the interval is running
        this.startTime = null;      // Track when the interval started
        this.elapsedTime = 0;       // Track elapsed time
        this.intervalId = null;     // Store the interval ID
    }

    start() {
        if (this.isRunning) return; // Prevent starting if already running

        this.startTime = Date.now(); // Set the start time
        this.isRunning = true;        // Mark as running

        this.intervalId = setInterval(() => {
            this.elapsedTime += this.interval; // Increment elapsed time
            this.callback(); // Call the callback function
        }, this.interval);
    }

    pause() {
        if (!this.isRunning) return; // Prevent pausing if not running

        clearInterval(this.intervalId); // Clear the interval
        this.isRunning = false; // Mark as not running
        this.elapsedTime += Date.now() - this.startTime; // Update elapsed time
    }

    resume() {
        if (this.isRunning) return; // Prevent resuming if already running

        this.startTime = Date.now(); // Reset the start time
        this.isRunning = true; // Mark as running

        this.intervalId = setInterval(() => {
            this.elapsedTime += this.interval; // Increment elapsed time
            this.callback(); // Call the callback function
        }, this.interval);
    }

    clear() {
        clearInterval(this.intervalId); // Clear the interval
        this.isRunning = false; // Mark as not running
        this.elapsedTime = 0; // Reset elapsed time
        this.startTime = null; // Reset start time
    }

    getElapsedTime() {
        return this.isRunning ? this.elapsedTime + (Date.now() - this.startTime) : this.elapsedTime;
    }
}

// Example usage
const interval = new ResumableInterval(() => {
    console.log("Interval executed!");
}, 1000);

interval.start(); // Start the interval

setTimeout(() => {
    interval.pause(); // Pause after 3 seconds
    console.log("Paused:", interval.getElapsedTime(), "ms");
}, 3000);

setTimeout(() => {
    interval.resume(); // Resume after 5 seconds
    console.log("Resumed");
}, 5000);

setTimeout(() => {
    interval.clear(); // Clear the interval after 10 seconds
    console.log("Cleared");
}, 10000);
