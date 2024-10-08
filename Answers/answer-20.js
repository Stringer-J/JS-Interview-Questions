// Question 20
// Implement a class that can subscribe to and emit events that trigger attached callback functions.

class EventEmitter {
    constructor() {
        this.events = {}; // Object to hold event listeners
    }

    // Method to subscribe to an event
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []; // Initialize the event array if it doesn't exist
        }
        this.events[event].push(callback); // Add the callback to the event array
    }

    // Method to emit an event and trigger callbacks
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args)); // Call each callback with the provided arguments
        }
    }

    // Method to unsubscribe from an event
    off(event, callback) {
        if (!this.events[event]) return; // Exit if the event doesn't exist

        this.events[event] = this.events[event].filter(cb => cb !== callback); // Remove the callback
    }
}

// Example usage:
const emitter = new EventEmitter();

const onFoo = (data) => {
    console.log('foo event triggered with data:', data);
};

// Subscribe to the 'foo' event
emitter.on('foo', onFoo);

// Emit the 'foo' event
emitter.emit('foo', { some: 'data' }); // Outputs: "foo event triggered with data: { some: 'data' }"

// Unsubscribe from the 'foo' event
emitter.off('foo', onFoo);

// Emit again to see if the listener is removed
emitter.emit('foo', { some: 'data' }); // No output
