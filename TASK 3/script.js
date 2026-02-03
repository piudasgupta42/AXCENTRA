function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "Please enter a city name";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        result.innerHTML = "City not found";
        return;
      }

      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const condition = data.weather[0].description;

      result.innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡 Temperature: ${temp} °C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌥 Condition: ${condition}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = "Error fetching data";
    });
}
