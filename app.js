const api ={
    key:"1e9ed597558a664923740217b013d342",
    base:"https://api.openweathermap.org/data/2.5/",
    proxy:"https://cors-anywhere.herokuapp.com/"
} 
const cityName= document.querySelector("#cityName");
const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const dayCondition=document.querySelector(".dayCondition");
const highLow=document.querySelector(".highLow");

cityName.addEventListener('keypress',setCity);

function setCity(evt) {
    if(evt.keyCode===13) {
        getResults(cityName.value);
        console.log(cityName.value);
    }
}
function getResults(query) {
     
   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(weather => {
         return weather.json();
      }).then(displayResults);

}
function displayResults(weather) {
    city.innerHTML=`${weather.name},${weather.sys.country}`;
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;
    dayCondition.innerHTML=weather.weather[0].main;
    highLow.innerHTML=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;



}