// Enable button when a weather type is selected
weatherSelect.addEventListener("change", function () {
  if (weatherSelect.value !== "") {
    generateButton.disabled = false; // Enable button
    errorElement.textContent = ""; // Clear any previous error messages
  } else {
    generateButton.disabled = true; // Keep button disabled if no valid selection
  }
});

// Click handler for generating a location
function generateLocation() {
  const selectedWeather = weatherSelect.value; // Get selected weather type
  const locationArray = recommendations[selectedWeather]; // Get locations for weather
  const randomLocation =
    locationArray[Math.floor(Math.random() * locationArray.length)]; // Randomly pick a location

  // Store the selected weather and location in localStorage
  saveToLocalStorage(selectedWeather, randomLocation);

  // Display the recommendation
  selectedWeatherElement.textContent = selectedWeather; // Show selected weather
  recommendedLocationElement.textContent = randomLocation; // Show random location

  // Fetch GIF for the location
  fetchGiphy(randomLocation);

  // Fetch and create a Wikipedia link for the location
  fetchWikipediaLink(randomLocation);

  // Switch to the recommendation screen
  weatherSelectionScreen.style.display = "none";
  recommendationScreen.style.display = "block";
}

// Event listener for the "Generate Location" button
generateButton.addEventListener("click", generateLocation);

// Enable button when a weather type is selected
weatherSelect.addEventListener("change", function () {
  if (weatherSelect.value !== "") {
    generateButton.disabled = false; // Enable button
    errorElement.textContent = ""; // Clear any previous error messages
  } else {
    generateButton.disabled = true; // Keep button disabled if no valid selection
  }
});

// Click handler to go back to the weather selection screen and generate a new location
document
  .getElementById("newLocationButton")
  .addEventListener("click", function () {
    weatherSelectionScreen.style.display = "block"; // Show weather selection screen
    recommendationScreen.style.display = "none"; // Hide recommendation screen
  });
