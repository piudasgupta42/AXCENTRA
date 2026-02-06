
function getWeather() {
  var city = document.getElementById("city").value;
  var result = document.getElementById("result");

  if (city === "") {
    result.innerText = "Please enter a city name";
    return;
  }

  // Simulated API response (JSON)
  var weatherData = {
    city: city,
    temperature: 29,
    humidity: 70,
    condition: "Clear Sky"
  };

  // DOM manipulation + JSON usage
  result.innerHTML =
    "<h3>Weather Details</h3>" +
    "<b>City:</b> " + weatherData.city + "<br>" +
    "<b>Temperature:</b> " + weatherData.temperature + " °C<br>" +
    "<b>Humidity:</b> " + weatherData.humidity + "%<br>" +
    "<b>Condition:</b> " + weatherData.condition;
}
