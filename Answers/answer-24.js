// Question 24
// Implement a function that returns an object with all falsey values removed.

function removeFalsyValues(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => Boolean(value))
    );
}

// Example usage:
const inputObj = {
    a: 1,
    b: null,
    c: 'Hello',
    d: 0,
    e: false,
    f: 'World',
    g: undefined,
};

const cleanedObj = removeFalsyValues(inputObj);
console.log(cleanedObj); // Output: { a: 1, c: 'Hello', f: 'World' }
