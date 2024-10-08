// Question 3
// Implement a function to construct a table of contents from an HTML document.

function generateTableOfContents() {
    const toc = document.getElementById('toc');
    const headings = document.querySelectorAll('h1, h2, h3'); // Select headings

    const tocList = document.createElement('ul'); // Create a list for the ToC

    headings.forEach((heading) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');

        // Create an ID for the heading if it doesn't have one
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase(); // Generate an ID
        }

        anchor.href = `#${heading.id}`; // Set the href to the heading's ID
        anchor.textContent = heading.textContent; // Use heading text as link text
        listItem.appendChild(anchor); // Append anchor to list item
        tocList.appendChild(listItem); // Append list item to ToC list
    });

    toc.appendChild(tocList); // Append ToC list to the ToC container
}

// Call the function to generate the ToC on page load
document.addEventListener('DOMContentLoaded', generateTableOfContents);
