export default async function fetchWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=03d984259a17467b965230209241201&q=${city}&days=5`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
