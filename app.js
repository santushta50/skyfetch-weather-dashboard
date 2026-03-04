const API_KEY = "da5bcc0f2db9305a8b0d2df28955dc9b";

async function getWeather(cityName) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );

        const data = response.data;

        document.getElementById("city").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp + " °C";
        document.getElementById("description").innerText = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("icon").src = iconUrl;

    } catch (error) {
        alert("City not found!");
    }
}

function searchWeather() {
    const cityName = document.getElementById("cityInput").value;
    getWeather(cityName);
}

// Default city on load
getWeather("Chennai");