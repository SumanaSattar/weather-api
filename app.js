const api ={
    key:"1e9ed597558a664923740217b013d342",
    base:"http://api.openweathermap.org/data/2.5/",
    proxy:"https://cors-anywhere.herokuapp.com/"
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
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=1e9ed597558a664923740217b013d342')//'${api.proxy}${api.base}weather?q=${query}&APPID=${api.key}')
      .then(weather => {
          return weather.json();
      }).then(displayResults);
}
function displayResults(weather) {
    console.log(weather);
}