import { WEATHER_API_KEY, WEATHER_API_URL } from './config.js';

const submitButton = document.getElementById('submitButton');
const submitBtnLatLon = document.getElementById('submitBtnLatLon');

const weatherInfo = document.getElementById('weatherInfo');

const handleInput = (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();

    if (city !== '' && isNaN(city)) {
        getWeather(city);
    } else {
        alert('Please enter a valid city name');
    }
}

const handleInput2 = (event) => {
    event.preventDefault();
    const cityLat = document.getElementById('cityLat').value.trim();
    const cityLon = document.getElementById('cityLon').value.trim();

    if (cityLat !== '' && cityLon !== '' && !isNaN(cityLat) && !isNaN(cityLon)) {
        getWeather2(cityLat, cityLon);
    } else {
        alert('Please enter a valid latitude and longitude');
    }
}

async function getWeather(city) {
    const url = `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

async function getWeather2(cityLat, cityLon) {
    const url2 = `${WEATHER_API_URL}?lat=${cityLat}&lon=${cityLon}&appid=${WEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


const displayWeather = (data) => {
    if (data) {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;
        const icon = weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
        weatherInfo.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <img src="${iconUrl}" alt="${description}">
        `;
    } else {
        weatherInfo.innerHTML = '<p>No weather data available</p>';
    }
}

submitButton.addEventListener('click', handleInput);
submitBtnLatLon.addEventListener('click', handleInput2);
