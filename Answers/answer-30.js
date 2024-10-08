// Question 30
// Implement a function to convert all the keys in an object to camel case.

function toCamelCase(str) {
    return str
        .replace(/-./g, match => match[1].toUpperCase()) // Handle hyphenated words
        .replace(/_./g, match => match[1].toUpperCase()) // Handle underscored words
        .replace(/^[A-Z]/, match => match.toLowerCase()); // Ensure the first character is lowercase
}

function convertKeysToCamelCase(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Return if not an object or is null
    }

    return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = toCamelCase(key);
        const value = obj[key];
        
        // Recursively convert keys for nested objects
        acc[camelCaseKey] = convertKeysToCamelCase(value);
        return acc;
    }, {});
}

// Example usage
const snakeCaseObj = {
    first_name: "John",
    last_name: "Doe",
    user_details: {
        user_age: 30,
        user_hobbies: ["reading", "gaming"]
    },
    user_id: null
};

const camelCaseObj = convertKeysToCamelCase(snakeCaseObj);
console.log(camelCaseObj);
// Output:
// {
//     firstName: "John",
//     lastName: "Doe",
//     userDetails: {
//         userAge: 30,
//         userHobbies: ["reading", "gaming"]
//     },
//     userId: null
// }
