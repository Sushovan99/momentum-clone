const API_KEY = "b7c535ed4190f042ff4a12d074bc0df6";

const onSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather h3:first-child"
      );
      const cityContainer = document.querySelector("#weather h3:nth-child(2)");
      const temperatureContainer = document.querySelector(
        "#weather h3:last-child"
      );
      weatherContainer.innerText = `Weather: ${data.weather[0].main}`;
      cityContainer.innerText = `City: ${data.name}`;
      temperatureContainer.innerText = `Temperature: ${Math.round(
        data.main.temp
      )}\u00B0C`;
    });
};

const onError = () => {
  alert("Can't find your location. Please press allow to get your location!");
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);
