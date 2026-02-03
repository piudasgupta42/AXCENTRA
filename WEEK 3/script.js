function getWeather() {
  const location = document.getElementById("location").value;
  const result = document.getElementById("result");

  if (location === "") {
    result.innerHTML = "Please enter a location";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";

  // STEP 1: Geocoding API (location → lat & lon)
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;

  fetch(geoUrl)
    .then(response => response.json())
    .then(geoData => {
      if (geoData.length === 0) {
        result.innerHTML = "Location not found";
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;
      const placeName = geoData[0].name;
      const country = geoData[0].country;

      // STEP 2: Weather API using lat & lon
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      return fetch(weatherUrl).then(response => response.json())
        .then(weatherData => {
          const temp = weatherData.main.temp;
          const humidity = weatherData.main.humidity;
          const condition = weatherData.weather[0].description;

          result.innerHTML = `
            <h3>${placeName}, ${country}</h3>
            <p>🌡 Temperature: ${temp} °C</p>
            <p>💧 Humidity: ${humidity}%</p>
            <p>🌤 Condition: ${condition}</p>
          `;
        });
    })
    .catch(error => {
      result.innerHTML = "Error fetching data";
    });
}
