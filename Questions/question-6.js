// Question 6
// Implement a function that returns a memoized version of a function which accepts any number of arguments.




// Memoization in JavaScript is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This is particularly useful for functions that have predictable outputs based on their inputs, such as recursive functions.

// A recursive function is a function that calls itself in order to solve a problem. It typically breaks down a complex problem into simpler subproblems, solving each subproblem in a similar way until it reaches a base case, which stops the recursion.

// Key Components of a Recursive Function:
// Base Case: This is the condition under which the function stops calling itself. It prevents infinite recursion and allows the function to return a value.

// Recursive Case: This is where the function calls itself with modified arguments to work toward the base case.

// Example of a Recursive Function:
// Here’s a simple example that calculates the factorial of a number:

// function factorial(n) {
//     // Base case
//     if (n === 0) {
//         return 1; // 0! is 1
//     }
//     // Recursive case
//     return n * factorial(n - 1); // n! = n * (n-1)!
// }

// console.log(factorial(5)); // Output: 120

// Explanation:
// Base Case: When n is 0, the function returns 1.
// Recursive Case: For any other positive integer n, it calls itself with n - 1 and multiplies the result by n.
// Recursive functions can be elegant and expressive, but they can also lead to performance issues and stack overflow errors if not implemented carefully, especially if the depth of recursion is very high.