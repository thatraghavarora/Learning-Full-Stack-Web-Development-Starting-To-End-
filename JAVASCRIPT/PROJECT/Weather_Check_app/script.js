const apikey = "You_api_key_here";


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

      fetch(url)
        .then(response => response.json())
        
        .then(data => {
          console.log("Weather data:", data);
          displayWeather(data);
          document.getElementById('spinner').style.display = 'none';
        })
        .catch(err => {
          document.getElementById("error").innerText = "Failed to fetch weather.";
                document.getElementById('spinner').style.display = 'none';
        });
    },
    (error) => {
      document.getElementById("error").innerText = `Error: ${error.message}`;
            document.getElementById('spinner').style.display = 'none';
    }
  );
} else {
  document.getElementById("error").innerText = "Geolocation is not supported.";
        document.getElementById('spinner').style.display = 'none';
}


function getweather() {
  const city = document.getElementById('cityInput').value.trim();
 


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('spinner').style.display = 'none';
      displayWeather(data);
    })
    .catch(() => {
      document.getElementById("error").innerText = "Failed to fetch weather.";
      document.getElementById('spinner').style.display = 'none';

    });
}


function displayWeather(data) {
  document.getElementById('cityName').innerText = "Weather of " +  data.name;
  document.getElementById('temperature').innerText = "Temperature: " + data.main.temp + "°C";
  document.getElementById('humidity').innerText = "Humidity: " + data.main.humidity + "%";
  document.getElementById('windSpeed').innerText = "Wind Speed: " + data.wind.speed + " m/s";
  document.getElementById('pressure').innerText = "Pressure: " + data.main.pressure + " hPa";
  document.getElementById('sunrise').innerText = "Sunrise: " + new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById('sunset').innerText = "Sunset: " + new Date(data.sys.sunset * 1000).toLocaleTimeString();
  document.getElementById('error').innerText = "";

  // 🌤️ Weather description
  document.getElementById('weatherDescription').innerText = data.weather[0].description;

}

document.getElementById('cityInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    getWeather();
    
  }
});
