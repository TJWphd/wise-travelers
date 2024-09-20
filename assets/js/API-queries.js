// Function to fetch GIF from Giphy API
function fetchGiphy(location) {
  fetch(`${giphyBaseUrl}?api_key=${giphyApiKey}&q=${location}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const gifUrl = data.data[0].images.original.url; // Get GIF URL
        locationImageElement.src = gifUrl; // Set image source to GIF
      } else {
        locationImageElement.alt = "No GIF found"; // If no GIF found
      }
    })
    .catch((error) => {
      console.error("Error fetching GIF:", error);
      locationImageElement.alt = "Error loading GIF";
    });
}

// Function to fetch the Wikipedia page ID and create a link
function fetchWikipediaLink(location) {
  const url = `${wikipediaBaseUrl}?action=query&origin=*&format=json&prop=info&inprop=url&titles=${location}`;

  return fetch(url)
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      const page = Object.values(data.query.pages)[0]; // Get the first page result
      const wikiLink = `https://en.wikipedia.org/?curid=${page.pageid || ""}`;
      wikiLocationElement.textContent = location; // Display location name in the link text
      wikiLinkElement.href = page.pageid ? wikiLink : "#"; // Set link if page exists, else set to '#'
      wikiLinkElement.target = "_blank"; // Open the link in a new tab
    })
    .catch((error) => {
      console.error("Error fetching Wikipedia link:", error);
    });
}
