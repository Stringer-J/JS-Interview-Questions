// Question 18
// Implement a function that formats a list of items into a single readable string.

function formatList(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return ''; // Return an empty string for invalid input
    }

    if (items.length === 1) {
        return items[0]; // Return the single item if there's only one
    }

    const lastItem = items.pop(); // Remove the last item
    return `${items.join(', ')} and ${lastItem}`; // Join the rest with commas and add "and" before the last item
}

// Example usage:
const items1 = ['apples', 'bananas', 'cherries'];
console.log(formatList(items1)); // "apples, bananas and cherries"

const items2 = ['only one item'];
console.log(formatList(items2)); // "only one item"

const items3 = [];
console.log(formatList(items3)); // ""

const items4 = ['item1', 'item2'];
console.log(formatList(items4)); // "item1 and item2"
