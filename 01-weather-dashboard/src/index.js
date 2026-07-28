const cityForm = document.getElementById("city-form");

function weatherOutput(Data){
    const times = Data.daily.time;

    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = "";
    weatherDiv.classList.add("weather-div")
    console.log(document.getElementById("weather"));

    for (let i = 0; i < times.length; i++) {
        const date = times[i];
        const unit = Data.daily_units.temperature_2m_max;
        const maxTemp = Data.daily.temperature_2m_max[i];
        const minTemp = Data.daily.temperature_2m_min[i];

        console.log("daily Weather: ", date, maxTemp+unit, minTemp+unit);

        const dateOutput = document.createElement("p");
        dateOutput.classList.add("weather-date");
        dateOutput.textContent = date;

        const temperatureOutput = document.createElement("p");
        temperatureOutput.classList.add("weather-temperature");
        temperatureOutput.textContent = maxTemp+unit, minTemp+unit;

        weatherDiv.appendChild(dateOutput);
        weatherDiv.appendChild(temperatureOutput);
    }
}
/*for-Schleife für das Wetter unter daily -> time, 
dann integrierte Forschleife für temperature_2m_max und temperature_2m_min*/

async function getWeatherData (URL) {
    const geoParams = new URLSearchParams({
        latitude: URL.results[0].latitude,
        longitude: URL.results[0].longitude,
        timezone: 'auto',
        forecast_days: '5',
        current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    });

    console.log(geoParams.toString());

    const weatherAtLocationURL = 'https://api.open-meteo.com/v1/forecast';
    const weatherAtLocationResponse = await fetch(`${weatherAtLocationURL}?${geoParams}`); 
    const weatherAtLocationData = await weatherAtLocationResponse.json();

    console.log("Weather: ", weatherAtLocationData); 
    weatherOutput(weatherAtLocationData);

}

async function getWeatherInformation (city) {
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const geoResponse  = await fetch(geoURL);
    const geoData = await geoResponse.json();

    console.log("Coordinates :", geoData);

    getWeatherData(geoData);
};

cityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const cityInput = document.getElementById("city-input");
    const cityName = cityInput.value;

    console.log("City Name: ", cityName);

    getWeatherInformation(cityName);
    cityInput.value = "";
});
