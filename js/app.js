
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
cityInput.addEventListener("input", function() {
  clearTimeout(timer);
  timer = setTimeout( async () => {
const data = await getWeatherData(cityInput.value);
renderWeather(transformPerDay(data));    
  }, 300);
});

const getDayFromString = (string) =>{
  const date = new Date(string);
  const result = date.getDay();
  return result
}

const transformPerDay = (data)=>{
const dayList = [];
data.list.forEach(element => {
  const weekDay = new Date(element.dt_txt).toLocaleString('nl-BE', { weekday: 'long' });
  element.weekday = weekDay
});

const weekDays = ["zondag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "maandag"];

weekDays.forEach((weekDay)=>{

  const filtered = data.list.filter((item)=> item.weekday == weekDay);
  dayList.push(filtered);
});

const filtered = dayList.filter(function (el) {
  el.length > 0
});

dayList.pop(); // works but probably not on other days than monday...


return dayList;
};






const renderWeather = (days) => {

  
  days.forEach((day)=>{


    let max = day[0].main.temp_max;
    let min = day[0].main.temp_min;


    day.forEach((hour)=>{
      if(hour.main.temp_max > max){
        max = hour.main.temp_max;
      }
      if(hour.main.temp_min < min){
        min = hour.main.temp_min;
      } 
    });


    console.log(day[0].weekday + "---MAX TEMP--" + max);
    console.log(day[0].weekday + "---MIN TEMP--" + min);
  
  });


  const tempNode = template.content.cloneNode(true);
  tempNode.querySelector("h1").innerText = "maandag";
  tempNode.querySelector(".icon img").src="";
  tempNode.querySelector(".percent_rain").innerText="";
  tempNode.querySelector(".min_temp").innerText="";
  tempNode.querySelector(".max_temp").innerText="";
//  target.appendChild(tempNode);

};

