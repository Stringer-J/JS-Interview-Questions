// Question 11
// Implement a function that determines if two values are deep equal.

function deepEqual(value1, value2) {
    // Check if both values are strictly equal
    if (value1 === value2) {
        return true;
    }

    // Check if either value is null or not an object
    if (value1 == null || value2 == null || typeof value1 !== 'object' || typeof value2 !== 'object') {
        return false;
    }

    // Get the keys of both objects
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Recursively check each key and value
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}

// Example usage
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
