// Points
const pointsTable = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
};

// Grabbing form and result div elements by their id's
const form = document.getElementById("points-form");
const resultDiv = document.getElementById("result");

// Known race id's
const raceIds = ["race-1", "race-2", "race-3", "race-4", "race-5"];

// Event listener for submit button
form.addEventListener("submit", function (event) {
  // When the form is submitted, function is called
  event.preventDefault(); // Prevents the default form submission behavior (page reload)

  let totalPoints = 0; // Initializing point counter

  raceIds.forEach((id) => {
    // Looping through each race id
    const input = document.getElementById(id); // Grabbing the input box by id
    const position = parseInt(input.value); // Getting the value of the input box and parsing it to an integer

    if (!isNaN(position)) {
      // Continue only if the input is a valid number (not empty or invalid)
      totalPoints += pointsTable[position] || 0; // Add the corresponding points from the table or add 0 if the position is 11 or higher
    }
  });

  resultDiv.textContent = `Total Points: ${totalPoints}`; // Displaying the total points in the result div
});
