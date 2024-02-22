import { convertTime12HourFormat } from "./convertTime12HourFormat";
import { formatDate } from "./formatDate";

function cityDescription(results) {
  const timeAndDate = results.location.localtime.split(" ");
  const currentTime = timeAndDate[1];
  const formattedTime = convertTime12HourFormat(currentTime);
  const datePart = results.forecast.forecastday[0].date;
  const formattedDate = formatDate(datePart);

  const resultsObj = {
    cityName: results.location.name.toUpperCase(),
    region: results.location.region.toUpperCase(),
    condition: results.current.condition.text,
    temp: Math.round(results.current.temp_f),
    date: formattedDate,
    currentTime: formattedTime,
    high: results.forecast.forecastday[0].day.maxtemp_f,
    low: results.forecast.forecastday[0].day.mintemp_f,
  };

  displayData(resultsObj);
}

function displayData(resultsObj) {
  const city = document.querySelector(".city-header");
  const weatherDescription = document.querySelector(".weather-description");
  const temp = document.querySelector(".temp");
  const date = document.querySelector(".date");
  const current_time = document.querySelector(".current-time");
  const max_temp = document.querySelector(".maxtemp");
  const min_temp = document.querySelector(".mintemp");

  city.textContent = `${resultsObj.cityName}, ${resultsObj.region}`;
  weatherDescription.textContent = resultsObj.condition;
  temp.textContent = resultsObj.temp;
  date.textContent = resultsObj.date;
  current_time.textContent = resultsObj.currentTime;
  max_temp.textContent = `High: ${resultsObj.high}`;
  min_temp.textContent = `Low: ${resultsObj.low}`;
}

export { App, cityDescription };
