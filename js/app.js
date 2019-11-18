
const template = document.getElementById("weather-day");
const target = document.getElementById("app");

const cityInput = document.getElementById("city-input");
const weatherForm = document.getElementById("weather-form");


const getWeatherData = async city => {
  const apiKey = "d02ba4169b2ac4f0d179b1e84c341147";
  //const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=2797657&APPID=${apiKey}`;
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;

  const respons = await fetch(apiUrl);
  const data = await respons.json();
  return data;
};



let timer = null;
cityInput.addEventListener("keydown", function() {
  clearTimeout(timer);
  timer = setTimeout( async () => {
const data = await getWeatherData(cityInput.value);
renderWeather(data);    
  }, 400);
});

const getDayFromString = (string) =>{
  const result = "test";
  return result
}

const renderWeather = (data) => {

  const tempNode = template.content.cloneNode(true);
  tempNode.querySelector("h1").innerText = "maandag";
  tempNode.querySelector(".icon img").src="";
  tempNode.querySelector(".percent_rain").innerText="";
  tempNode.querySelector(".min_temp").innerText="";
  tempNode.querySelector(".max_temp").innerText="";
//  target.appendChild(tempNode);

};

