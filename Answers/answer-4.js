// Question 4
// Implement a function to filter rows of data matching a specified requirement.

const users = [
    { id: 1, name: 'Alice', age: 25, country: 'USA' },
    { id: 2, name: 'Bob', age: 30, country: 'UK' },
    { id: 3, name: 'Charlie', age: 35, country: 'USA' },
    { id: 4, name: 'David', age: 28, country: 'Canada' },
    { id: 5, name: 'Eve', age: 22, country: 'UK' },
];

function filterData(data, criteria) {
    return data.filter(item => {
        // Check each key in the criteria object
        return Object.keys(criteria).every(key => {
            // Check if the item's property matches the criteria
            return item[key] === criteria[key];
        });
    });
}

// Example usage
const criteria = { country: 'USA' };
const filteredUsers = filterData(users, criteria);

console.log(filteredUsers);
