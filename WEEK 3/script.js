
function getWeather() {
  const city = document.getElementById("city").value;
  const output = document.getElementById("output");

  const API_KEY = "function getWeather() {
  const city = document.getElementById("city").value;
  const output = document.getElementById("output");

  const API_KEY = "https://api.openweathermap.org/data/2.5/weather";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city + "&units=metric&appid=" + API_KEY;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      output.innerText = "Error: " + xhr.status;
      return;
    }

    const data = JSON.parse(xhr.responseText);

    output.innerText =
      "City: " + data.name + "\n" +
      "Temperature: " + data.main.temp + " °C\n" +
      "Humidity: " + data.main.humidity + "%\n" +
      "Condition: " + data.weather[0].description;
  };

  xhr.onerror = function () {
    output.innerText = "Network error";
  };

  xhr.send();
}";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city + "&units=metric&appid=" + API_KEY;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      output.innerText = "Error: " + xhr.status;
      return;
    }

    const data = JSON.parse(xhr.responseText);

    output.innerText =
      "City: " + data.name + "\n" +
      "Temperature: " + data.main.temp + " °C\n" +
      "Humidity: " + data.main.humidity + "%\n" +
      "Condition: " + data.weather[0].description;
  };

  xhr.onerror = function () {
    output.innerText = "Network error";
  };

  xhr.send();
}
   
