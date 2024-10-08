// Question 2
// Implement a function that performs a deep copy of a value, but also handles circular references.

function deepCopy(value, cache = new WeakMap()) {
    // Handle null or non-object values
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Check for circular reference
    if (cache.has(value)) {
        return cache.get(value);
    }

    // Create a new object or array based on the value's type
    const copy = Array.isArray(value) ? [] : {};
    cache.set(value, copy);

    // Recursively copy properties
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepCopy(value[key], cache);
        }
    }

    return copy;
}

// Example usage:
const obj = { a: 1 };
obj.self = obj; // Circular reference

const copiedObj = deepCopy(obj);
console.log(copiedObj); // Output: { a: 1, self: [Circular] }
console.log(copiedObj.self === copiedObj); // Output: true (circular reference handled)
