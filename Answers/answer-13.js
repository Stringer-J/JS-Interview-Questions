// Question 13
// Implement a function that returns a new object after squashing the input object.

function squashObject(obj, prefix = '') {
    const result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key; // Create new key with prefix
            const value = obj[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // Recursively squash the nested object
                Object.assign(result, squashObject(value, newKey));
            } else {
                // Assign value to the new key
                result[newKey] = value;
            }
        }
    }

    return result;
}

// Example usage
const input = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

const squashed = squashObject(input);
console.log(squashed);
