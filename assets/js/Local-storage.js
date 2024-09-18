// Function to save data to localStorage
function saveToLocalStorage(weather, location) {
  localStorage.setItem("weather_selection", weather);
  localStorage.setItem("recommendation_output", location);
}
