// Question 16
// Implement the functionality behaviour of Promise.allSettled()

function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        const results = [];
        let count = 0; // Track the number of settled promises

        // Ensure we have an iterable
        const iterable = promises[Symbol.iterator]();

        for (const promise of iterable) {
            // Ensure each promise is an instance of Promise
            Promise.resolve(promise)
                .then((value) => {
                    results.push({
                        status: 'fulfilled',
                        value: value,
                    });
                })
                .catch((reason) => {
                    results.push({
                        status: 'rejected',
                        reason: reason,
                    });
                })
                .finally(() => {
                    count++;
                    // If all promises are settled, resolve the outer promise
                    if (count === promises.length) {
                        resolve(results);
                    }
                });
        }

        // If the input is empty, resolve with an empty array
        if (promises.length === 0) {
            resolve([]);
        }
    });
}

// Example usage
const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.reject('Error 2');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'Success 3'));

promiseAllSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log('All promises settled:', results);
        /*
        Output:
        All promises settled: [
            { status: 'fulfilled', value: 'Success 1' },
            { status: 'rejected', reason: 'Error 2' },
            { status: 'fulfilled', value: 'Success 3' }
        ]
        */
    });
