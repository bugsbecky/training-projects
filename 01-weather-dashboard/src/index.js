const cityForm = document.getElementById("city-form");

async function getWeatherInformation (city) {
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const geoResponse  = await fetch(geoURL);
    const geoData = await geoResponse.json();
    console.log("Coordinates :", geoData);

    const params = new URLSearchParams({
        latitude: geoData.results[0].latitude,
        longitude: geoData.results[0].longitude,
        timezone: 'auto',
        forecast_days: '5',
        current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    });

    console.log(params.toString());

    const weatherAtLocationURL = 'https://api.open-meteo.com/v1/forecast';
    const weatherAtLocationResponse = await fetch(`${weatherURL}?${params}`); //Error: Uncaught (in promise) ReferenceError: weatherURL is not defined
    const weatherAtLocationData = await weatherAtLocationResponse.json();

    console.log(weatherAtLocationData); //Error
};

cityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const cityInput = document.getElementById("city-input");
    const cityName = cityInput.value;

    console.log("City Name: ", cityName);

    getWeatherInformation(cityName);
});
