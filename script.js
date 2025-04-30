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
  let formIsOk = true;

  raceIds.forEach((id) => {
    // Looping through each race id
    const input = document.getElementById(id); // Grabbing the input box by id
    const errorMsg = document.getElementById(`error-${id}`); // Grabbing the error message element by id
    const rawValue = input.value.trim(); // Trimming the input value to clean up whitespace

    if (rawValue === "") {
      // Allow empty inputs (treated as 11th or worse — 0 points)
      errorMsg.style.display = "none"; // No error for empty input
      return;
    }

    const position = parseInt(rawValue); // Getting the value of the input box and parsing it to an integer

    if (!isNaN(position) && position > 0 && rawValue === String(position)) {
      // Continue only if the input is a valid number (without leading zeros - technically in my opinion it's not an issue if the user writes 01 but for clarity I removed this option) and greater than 0
      totalPoints += pointsTable[position] || 0; // Add the corresponding points from the table or add 0 if the position is 11 or higher
      errorMsg.style.display = "none"; // Hide the error message if the input is valid
    } else {
      errorMsg.style.display = "block"; // Show the error message if the input is invalid
      formIsOk = false; // Set the form status to not ok
    }
  });

  if (formIsOk) {
    resultDiv.textContent = `Total Points: ${totalPoints}`; // Displaying the total points in the result div
    resultDiv.style.display = "block"; // Show the result
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    }); // Auto scroll to the bottom of the page if need to for see the result
  } else {
    resultDiv.style.display = "none"; // Hide the result if the form is not ok
  }
});
