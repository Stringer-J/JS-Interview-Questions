// Question 19
// Implement a function that converts a JavaScript value into a JSON string.

function convertToJson(value) {
    try {
        return JSON.stringify(value);
    } catch (error) {
        console.error("Error converting to JSON:", error);
        return null; // or handle the error as needed
    }
}

// Example usage:
const obj = { name: "Alice", age: 25, hobbies: ["reading", "hiking"] };
const jsonString = convertToJson(obj);
console.log(jsonString); // Output: {"name":"Alice","age":25,"hobbies":["reading","hiking"]}