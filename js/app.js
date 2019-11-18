 


const weatherForm = document.getElementById('weather-form');

weatherForm.addEventListener('submit', function(e) {
    const cityInput = document.getElementById('city-input').value;
    console.log(cityInput);
    e.preventDefault();
});