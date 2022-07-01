const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');




const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=42bce669996441380aed65928d42a37f';
apiFetch(url);

async function apiFetch(apiURL){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            displayResults(data)
            console.log(jsObject);
        }
        else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(weatherData){
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


}
const windSpeed = document.querySelector("#wind.speed")
let temp = parseFloat(document.querySelector("#current-temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";


if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}

document.querySelector("#chill").innerHTML = windchill;

function windChill(temp, speed) {
  let windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return Math.round((windchill + Number.EPSILON) * 100) / 100;;
}