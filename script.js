
"use strict";

// Function to calculate the average score
const getAverage = scores => {
    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total / scores.length;
};

// Ask the user to enter test scores
const userEntry = prompt("Enter test scores separated by commas:");

// Check if the user entered any scores
if (userEntry === null || userEntry.trim() === "") {
    document.querySelector("#results").textContent =
        "No scores were entered.";
} else {
    // Convert the input into an array of numbers
    const scores = userEntry.split(",").map(Number);

    // Calculate the lowest, highest, and average scores
    const lowScore = Math.min(...scores);
    const highScore = Math.max(...scores);
    const average = getAverage(scores);

    // Display the results
    document.querySelector("#results").innerHTML =
        "Scores: " + scores.join(", ") + "<br>" +
        "Low Score: " + lowScore + "<br>" +
        "High Score: " + highScore + "<br>" +
        "Average Score: " + average.toFixed(1);
}
