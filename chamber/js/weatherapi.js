const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#currentSpeed");
const windChill = document.querySelector('#windChill');


function calChill(windspeed, temp){


let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  if (temp <= 50 && windspeed > 3) {
     windchill = Math.round(windchill);
  } else {
     windchill = "N/A";
  }

  windChill.innerHTML = windchill



}

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=42bce669996441380aed65928d42a37f';
apiFetch(url);

async function apiFetch(apiURL){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            displayResults(data)
           
        }
        else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(weatherData){
    calChill(weatherData.wind.speed.toFixed(1), weatherData.main.temp.toFixed(1))
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(1);
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


}