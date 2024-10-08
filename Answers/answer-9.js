// Question 9
// Implement a function to highlight text if searched terms appear within it.

function highlightText(text, searchTerm) {
    if (!searchTerm) return text; // Return the original text if there's no search term

    // Create a regular expression to find the search term (case-insensitive)
    const regex = new RegExp(`(${searchTerm})`, 'gi');

    // Replace the matching terms with a highlighted span
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Example usage
const originalText = "This is a simple example text for highlighting.";
const searchTerm = "simple";

const highlightedText = highlightText(originalText, searchTerm);
console.log(highlightedText); // Output: This is a <span class="highlight">simple</span> example text for highlighting.

// css for highlight
// .highlight {
//     background-color: yellow; /* or any color you prefer */
// }
