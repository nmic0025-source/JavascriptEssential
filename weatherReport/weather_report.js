const apiKey = '8b4c121596ca036a268939c56c5ab3d5'; // Replace 'YOUR_API_KEY' with your actual API key

function showweatherDetails(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);

function showcityCoord(event) {
    event.preventDefault();

    const lat = parseFloat(document.getElementById('lat').value);
    const lon = parseFloat(document.getElementById('lon').value);
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            const citycoord = document.getElementById('citycoord');
            citycoord.innerHTML = `<h2>Weather in ${lon},${lat}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const citycoord = document.getElementById('citycoord');
            citycoord.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('coordform').addEventListener('submit',showcityCoord );