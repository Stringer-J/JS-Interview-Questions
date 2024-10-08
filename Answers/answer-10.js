// Question 10
// Implement a function to recursively transform values.

function recursiveTransform(input, transformFn) {
    // Check if input is an array
    if (Array.isArray(input)) {
        return input.map(item => recursiveTransform(item, transformFn));
    }

    // Check if input is an object
    if (input !== null && typeof input === 'object') {
        const transformedObject = {};
        for (const key in input) {
            if (input.hasOwnProperty(key)) {
                transformedObject[key] = recursiveTransform(input[key], transformFn);
            }
        }
        return transformedObject;
    }

    // Apply the transformation function to the value
    return transformFn(input);
}

// Example transformation function
function doubleIfNumber(value) {
    return typeof value === 'number' ? value * 2 : value;
}

// Example usage
const data = {
    a: 1,
    b: [2, 3, { c: 4, d: 5 }],
    e: { f: 6, g: [7, { h: 8 }] }
};

const transformedData = recursiveTransform(data, doubleIfNumber);
console.log(transformedData);
