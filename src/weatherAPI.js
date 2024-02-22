export default async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=03d984259a17467b965230209241201&q=${city}&days=5`,
    { mode: "cors" }
  );

  if (response.status === 400) {
    return false;
  } else {
    const weatherData = await response.json();
    return weatherData;
  }
}
