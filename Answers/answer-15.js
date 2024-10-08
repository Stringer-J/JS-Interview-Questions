// Question 15
// Implement the functionality behaviour of Promise.any()

function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        const errors = [];
        let count = 0; // Track the number of rejected promises

        // Ensure we have an iterable
        const iterable = promises[Symbol.iterator]();

        for (const promise of iterable) {
            // Ensure each promise is an instance of Promise
            Promise.resolve(promise)
                .then(resolve) // If fulfilled, resolve the outer promise
                .catch((error) => {
                    errors.push(error); // If rejected, store the error
                    count++;

                    // If all promises are rejected, reject the outer promise
                    if (count === promises.length) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                });
        }

        // If the input is empty, we can immediately reject
        if (promises.length === 0) {
            reject(new AggregateError([], 'No promises were provided'));
        }
    });
}

// Example usage
const promise1 = Promise.reject('Error 1');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Success 2'));
const promise3 = Promise.reject('Error 3');

promiseAny([promise1, promise2, promise3])
    .then((result) => {
        console.log('First resolved promise:', result); // Should log "Success 2"
    })
    .catch((error) => {
        console.error('All promises were rejected:', error);
    });
