export default function getMetrics(results) {
  const resultsObj = {
    feelsLike: results.current.feelslike_f,
    humidity: results.current.humidity,
    wind: results.current.gust_mph,
    chanceOfRain: results.forecast.forecastday[0].day.daily_chance_of_rain,
  };

  displayData(resultsObj);
}

function displayData(resultsObj) {
  const feelsLike = document.querySelector(".feels-temp");
  const humidity = document.querySelector("#humidity-metric");
  const wind = document.querySelector("#wind-metric");
  const chanceOfRain = document.querySelector("#rain-metric");

  feelsLike.textContent = `${resultsObj.feelsLike}`;
  humidity.textContent = `${resultsObj.humidity}%`;
  wind.textContent = `${resultsObj.wind}mph`;
  chanceOfRain.textContent = `${resultsObj.chanceOfRain}%`;
}
