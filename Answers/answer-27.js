// Question 27
// Implement a function to execute N async tasks in series.

async function executeTasksInSeries(tasks) {
    const results = []; // Array to store results of each task

    for (const task of tasks) {
        const result = await task(); // Wait for the current task to complete
        results.push(result); // Store the result
    }

    return results; // Return an array of results
}

// Example usage:
const task1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Result 1");
        }, 1000);
    });
};

const task2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("Result 2");
        }, 500);
    });
};

const task3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("Result 3");
        }, 800);
    });
};

// Running the tasks in series
executeTasksInSeries([task1, task2, task3]).then((results) => {
    console.log("All tasks completed:", results);
});
