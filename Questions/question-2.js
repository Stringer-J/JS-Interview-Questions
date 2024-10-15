// Question 2
// Implement a function that performs a deep copy of a value, but also handles circular references.




// In JavaScript, a deep copy refers to creating a new object that is a copy of an existing object, including all nested objects and arrays. This means that the new object is completely independent of the original; changes to the new object do not affect the original and vice versa.

// In contrast, a shallow copy only copies the top-level properties. If the object contains nested objects or arrays, the references to those nested objects are copied, not the actual objects themselves. As a result, changes to nested objects in a shallow copy will also reflect in the original object.

// A WeakMap is a collection of key-value pairs in JavaScript where the keys are objects and the values can be any value. The key feature of a WeakMap is that it holds "weak" references to its keys. This means:

// Garbage Collection: If there are no other references to a key object, it can be garbage collected, and the WeakMap will automatically remove its corresponding entry. This helps prevent memory leaks in scenarios where objects are no longer needed.

// Key Types: Only objects can be used as keys in a WeakMap; primitive values (like strings or numbers) are not allowed.

// No Iteration: WeakMap does not support methods for iterating over its elements (like forEach, keys, values, or entries). This is partly because its keys can be garbage collected, so the collection’s state can change unpredictably.



// The deepCopy Function
// This function is designed to create a deep copy of a given value (which can be an object, array, or any other type). It uses a WeakMap to keep track of already copied objects to handle circular references.

// Parameters
// value: This is the value you want to copy. It can be a primitive value, an object, or an array.
// cache: This is a WeakMap used to store references to objects that have already been copied. This helps avoid infinite loops when dealing with circular references.
// Step-by-Step Explanation
// Base Case:

// if (value === null || typeof value !== 'object') {
//     return value;
// }

// If value is null or not an object (i.e., it's a primitive type like a number, string, boolean, etc.), the function returns the value as is. This is because primitive values do not need to be copied.
// Check for Circular References:

// if (cache.has(value)) {
//     return cache.get(value);
// }

// Before creating a new copy, the function checks if the value has already been copied by checking the cache. If it has, it retrieves and returns the already copied object. This prevents infinite recursion when the object has circular references (e.g., an object referencing itself).
// Creating a New Copy:

// const copy = Array.isArray(value) ? [] : {};

// A new copy is created. If value is an array, an empty array is created; otherwise, an empty object is created.
// Store in Cache:

// cache.set(value, copy);

// The original object is stored in the cache with the new copy as its value. This is crucial for tracking which objects have been copied.
// Iterating Over Properties:

// for (const key in value) {
//     if (value.hasOwnProperty(key)) {
//         copy[key] = deepCopy(value[key], cache);
//     }
// }

// The function then iterates over all enumerable properties of value using a for...in loop.
// The hasOwnProperty check ensures that only the object's own properties (not inherited ones) are processed.
// For each property, the function calls deepCopy recursively, passing the value of that property and the cache. This allows for copying nested objects or arrays.
// Returning the Copy:

// return copy;

// Finally, the newly created deep copy is returned.
// Example Usage
// Now, let's look at the example you provided:

// const obj = { a: 1 };
// obj.self = obj;

// const copiedObj = deepCopy(obj);
// console.log(copiedObj);
// console.log(copiedObj.self === copiedObj);

// Breakdown of the Example
// Creating an Object:

// const obj = { a: 1 };
// obj.self = obj;

// An object obj is created with a property a set to 1. The self property is added, which references the object itself, creating a circular reference.
// Copying the Object:

// const copiedObj = deepCopy(obj);
// The deepCopy function is called with obj. The function processes obj:
// It finds obj is not null and is an object, so it continues.
// Since obj is not in cache, it creates a new copy.
// It adds the copy to cache.
// It processes the properties: a is copied normally, and self is encountered.
// When self is processed, the function sees that self references obj. Since obj is in cache, it retrieves the already copied object instead of creating a new one. This ensures that copiedObj.self references the same object as copiedObj.
// Logging the Result:

// console.log(copiedObj);

// This will output the structure of the copied object, showing it has the same properties as obj, including the circular reference.
// Checking Circular Reference:

// console.log(copiedObj.self === copiedObj);

// This checks if copiedObj.self refers to copiedObj. Since the circular reference was correctly handled during the copying process, this will output true.

// Summary
// The deepCopy function effectively creates a deep copy of objects, handling circular references through the use of a WeakMap. This ensures that objects are copied correctly without causing infinite loops or memory leaks, making it a robust solution for deep copying complex data structures in JavaScript.