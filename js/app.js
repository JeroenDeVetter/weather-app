const getWeatherData = async city => {
  const apiKey = "d02ba4169b2ac4f0d179b1e84c341147";
  const apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&mode=xml=${apiKey}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    });
};

getWeatherData()

const getCityList = async () => {
  const response = await fetch("../data/city.list.json")
  const data = await response.json();
  return data; 
};

getCityList();
const cityInput = document.getElementById("city-input");
const weatherForm = document.getElementById("weather-form");
let timer = null;
cityInput.addEventListener("keydown", function() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    getCityList()
    .then(result => {
       const filtered = result.filter((name) => name.name.toLowerCase() == cityInput.value.toLowerCase().trim() );
       console.table(filtered);
    });
 
  }, 200);
});

weatherForm.addEventListener("submit", function(e) {
  const cityInputValue = cityInput.value;

  console.log(cityInputValue);
  e.preventDefault();
});
