// Question 8
// Implement a function that merges two objects together

// with spread operator
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage:
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const merged = mergeObjects(object1, object2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }





// with Object.assign()
function mergeObjects2(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example usage:
const object3 = { a: 1, b: 2 };
const object4 = { b: 3, c: 4 };

const merged2 = mergeObjects(object3, object4);
console.log(merged2); // Output: { a: 1, b: 3, c: 4 }
