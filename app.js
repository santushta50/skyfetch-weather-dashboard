
const API_KEY = "da5bcc0f2db9305a8b0d2df28955dc9b";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
    .then(function(response) {
        console.log(response.data);
        displayWeather(response.data);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

function displayWeather(data) {
    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + " °C";
    document.getElementById("description").innerText = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("icon").src = iconUrl;
}