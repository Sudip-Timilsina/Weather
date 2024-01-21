const apiKey="7c8860bb8bb3de8ca192823f23b03876"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var searchInput=document.querySelector(".search input")
var searchBtn=document.querySelector(".search button");
var weatherIcons=document.querySelector(".weather-icons")
async function checkweather(city){
   const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
     if(data.weather[0].main=="Clear"){
        weatherIcons.src= "images/clear.png"
     }
     if(data.weather[0].main=="Clouds"){
        weatherIcons.src= "images/clouds.png"
     }
     if(data.weather[0].main=="Drizzle"){
        weatherIcons.src= "images/drizzle.png"
     }
     if(data.weather[0].main=="Rain"){
        weatherIcons.src= "images/rain.png"
     }
     if(data.weather[0].main=="Mist"){
        weatherIcons.src= "images/mist.png"
     }
     if(data.weather[0].main=="Snow"){
        weatherIcons.src= "images/snow.png"
     }
     if(data.weather[0].main=="Humidity"){
        weatherIcons.src= "images/humidity.png"
     }
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchInput.value);
})