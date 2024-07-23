function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'dd4b36fcbec642582487cc3c2b4e27ab'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
            const description = data.weather[0].description;
            const cityName = data.name;

            weatherInfo.innerHTML = `
                <p>City: ${cityName}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data. Please try again.';
        });
}