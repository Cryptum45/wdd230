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
let API = '42bce669996441380aed65928d42a37f'
let lat = '38.983252'
let lon ='-77.095532'
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}`;
apiFetch(url);

async function apiFetch(apiURL){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
            displayResults1(data);
            displayResults2(data);
            displayResults3(data);


            alerts(data);

        }
        else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(weatherData){
    console.log(weatherData);
    calChill(weatherData.current.wind_speed.toFixed(1), weatherData.current.temp.toFixed(1))
    windSpeed.innerHTML = weatherData.current.wind_speed.toFixed(1);
    currentTemp.innerHTML = weatherData.current.temp.toFixed(1);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


}

function alerts(weatherData){
    if (weatherData.hasOwnProperty('alerts')){
        document.querySelector('#weatherMess').textContent = weatherData.alerts[0].event;
    }
else {
    document.querySelector('#weatherMess').textContent = 'No Weather alerts'
}
}
/******alert**/

/*************Day 1***************/
const currentTemp1 = document.querySelector('#current-temp1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('.dayOne figcaption');
const windSpeed1 = document.querySelector("#currentSpeed1");
const windChill1 = document.querySelector('#windChill1');


function calChill1(windspeed1, temp1){

let windchill1 = 35.74 + (0.6215 * temp1) - (35.75 * Math.pow(windspeed1, .16)) + (0.4275 * temp1 * Math.pow(windspeed1, .16));
  if (temp1 <= 50 && windspeed1 > 3) {
     windchill1 = Math.round(windchill1);
  } else {
     windchill1 = "N/A";
  }

  windChill1.innerHTML = windchill1



}



function displayResults1(weatherData){
    console.table(weatherData)
    calChill1(weatherData.daily[0].wind_speed.toFixed(1), weatherData.daily[0].temp.day)
    windSpeed1.innerHTML = weatherData.daily[0].wind_speed.toFixed(1);
    currentTemp1.innerHTML = weatherData.daily[0].temp.day;
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    const desc1 = weatherData.daily[0].weather[0].description;
  
    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    captionDesc1.textContent = desc1;


}
/********************Day 2************************ */

const currentTemp2 = document.querySelector('#current-temp2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('.dayTwo figcaption');
const windSpeed2 = document.querySelector("#currentSpeed2");
const windChill2 = document.querySelector('#windChill2');


function calChill2(windspeed2, temp2){

let windchill2 = 35.74 + (0.6215 * temp2) - (35.75 * Math.pow(windspeed2, .16)) + (0.4275 * temp2 * Math.pow(windspeed2, .16));
  if (temp2 <= 50 && windspeed2 > 3) {
     windchill2 = Math.round(windchill2);
  } else {
     windchill2 = "N/A";
  }

  windChill2.innerHTML = windchill2



}



function displayResults2(weatherData){
    console.table(weatherData)
    calChill2(weatherData.daily[1].wind_speed.toFixed(1), weatherData.daily[1].temp.day)
    windSpeed2.innerHTML = weatherData.daily[1].wind_speed.toFixed(1);
    currentTemp2.innerHTML = weatherData.daily[1].temp.day;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    const desc2 = weatherData.daily[1].weather[0].description;
  
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;
}


/********Day 3***************/

const currentTemp3 = document.querySelector('#current-temp3');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('.dayThree figcaption');
const windSpeed3 = document.querySelector("#currentSpeed3");
const windChill3 = document.querySelector('#windChill3');


function calChill3(windspeed3, temp3){

let windchill3 = 35.74 + (0.6215 * temp3) - (35.75 * Math.pow(windspeed3, .16)) + (0.4275 * temp3 * Math.pow(windspeed3, .16));
  if (temp3 <= 50 && windspeed3 > 3) {
     windchill3 = Math.round(windchill3);
  } else {
     windchill3 = "N/A";
  }

  windChill3.innerHTML = windchill3



}



function displayResults3(weatherData){
    console.table(weatherData)
    calChill3(weatherData.daily[2].wind_speed.toFixed(1), weatherData.daily[2].temp.day)
    windSpeed3.innerHTML = weatherData.daily[2].wind_speed.toFixed(1);
    currentTemp3.innerHTML = weatherData.daily[2].temp.day;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    const desc3 = weatherData.daily[2].weather[0].description;
  
    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = desc3;
}