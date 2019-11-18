const getWeatherData = async city => {
  const apiKey = "d02ba4169b2ac4f0d179b1e84c341147";
  //const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=2797657&APPID=${apiKey}`;
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    });
};


const getCityList = async () => {
  const response = await fetch("../data/city.list.json")
  const data = await response.json();
  return data; 
};

const cityInput = document.getElementById("city-input");
const weatherForm = document.getElementById("weather-form");
let timer = null;
cityInput.addEventListener("keydown", function() {
  clearTimeout(timer);
  timer = setTimeout(() => {

    const result = getWeatherData(cityInput.value);

    console.log(result);

  }, 400);
});

weatherForm.addEventListener("submit", function(e) {
  const cityInputValue = cityInput.value;

  console.log(cityInputValue);
  e.preventDefault();
});
