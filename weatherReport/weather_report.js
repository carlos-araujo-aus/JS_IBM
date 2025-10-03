import { WEATHER_API_KEY, WEATHER_API_URL } from './config.js';

const submitButton = document.getElementById('submitButton');

const weatherInfo = document.getElementById('weatherInfo');

const handleInput = (event) => {
    event.preventDefault();
    let city = document.getElementById('city').value.trim();

    if (city !== '' && isNaN(city)) {
        getWeather(city);
    } else {
        alert('Please enter a valid city name');
    }
}

async function getWeather(city) {
    let url = `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

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
