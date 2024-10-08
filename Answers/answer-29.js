// Question 29
// Implement a function to deserialize a JSON string.

function deserialize(jsonString) {
    try {
        // Use JSON.parse to convert the JSON string to a JavaScript object
        const result = JSON.parse(jsonString);
        return result;
    } catch (error) {
        // Handle JSON parsing errors
        console.error("Invalid JSON string:", error.message);
        return null; // or you can throw an error based on your needs
    }
}

// Example usage
const jsonString = '{"name": "Alice", "age": 30}';
const deserializedObject = deserialize(jsonString);

console.log(deserializedObject); // Output: { name: 'Alice', age: 30 }

// Handling invalid JSON
const invalidJsonString = '{"name": "Alice", "age": }';
const invalidDeserialization = deserialize(invalidJsonString); // This will log an error
console.log(invalidDeserialization); // Output: null
