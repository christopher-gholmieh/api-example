document.addEventListener("DOMContentLoaded", async () => {
    // URL: 
    const weather_url = "https://api.open-meteo.com/v1/forecast?latitude=33.8583&longitude=-118.0648&current_weather=true";

    // Map:
    const weather_map = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Cloudy",
        45: "Fog",
        48: "Rime Fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        80: "Light rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorms",
    };
});