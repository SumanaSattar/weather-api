const api ={
    key:"1e9ed597558a664923740217b013d342",
    base:" https://api.openweathermap.org/data/2.5/"
} 
const cityName= document.querySelector("#cityName");
cityName.addEventListener('keypress',setCity);

function setCity(evt) {
    if(evt.keyCode===13) {
        getResults(cityName.value);
        console.log(cityName.value);
    }
}
function getResults(query) {
    fetch('${api.base})weather?q=${query}&units=metric&APPID=${api.key}')
      .then(weather => {
          return weather.json();
      }).then(displayResults);
}
function displayResults(weather) {
    console.log(weather);
}