import "./index.css";
import { App } from "./app";
import fetchWeather from "./weatherAPI";

const newApp = App();

const form = document.querySelector(".search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form from being submitted
  console.log("running");
  const searchInput = document.querySelector("input[type=text]");
  const city = cityInput.value;

  console.log(city);

  const results = await fetchWeather(city);

  let temp = results.current.temp_f;
  let condition = results.current.condition.text;
  let feelsLike = results.current.feelslike_f;
  let wind = results.current.wind_mph;
  let Humidy = results.current.humidity;
  let rainChance = results.forecast.forecastday[0].day.daily_chance_of_rain;

  console.log("rainChance", rainChance);
});
