// Question 22
// Implement a function to merge rows of data from the same user.

function mergeUserData(rows) {
    const mergedData = {};

    rows.forEach(row => {
        const { userId, ...data } = row; // Destructure userId and the rest of the data

        // Initialize the entry for this user if it doesn't exist
        if (!mergedData[userId]) {
            mergedData[userId] = { userId, ...data };
        } else {
            // Merge the data: Customize this based on your requirements
            for (const key in data) {
                if (typeof data[key] === 'number') {
                    mergedData[userId][key] = (mergedData[userId][key] || 0) + data[key]; // Sum numbers
                } else if (typeof data[key] === 'string') {
                    mergedData[userId][key] = (mergedData[userId][key] || '') + data[key]; // Concatenate strings
                }
                // Add additional merging logic for other data types as needed
            }
        }
    });

    // Convert mergedData object back to an array
    return Object.values(mergedData);
}

// Example usage:
const dataRows = [
    { userId: '1', score: 10, name: 'Alice' },
    { userId: '2', score: 15, name: 'Bob' },
    { userId: '1', score: 5, name: 'Alice Cooper' },
    { userId: '2', score: 10, name: 'Bob Marley' },
];

const mergedResult = mergeUserData(dataRows);
console.log(mergedResult);
