import "./index.css";
import { App, cityDescription } from "./app";
import fetchWeather from "./weatherAPI";

const newApp = App();

const form = document.querySelector(".search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form from being submitted

  console.log("running");
  const searchInput = document.querySelector("input[type=text]");
  const city = searchInput.value;
  searchInput.value = "";

  console.log(city);

  const results = await fetchWeather(city);

  cityDescription(results);
  // pass results to respective function based on desired data
  let cityName = results.location.name;
  let region = results.location.region;
  let condition = results.current.condition.text;
  let temp = results.current.temp_f;
  let date = results.forecast.forecastday[0].date;
  // let time = results.location.localtime;

  let feelsLike = results.current.feelslike_f;
  let wind = results.current.wind_mph;
  let Humidy = results.current.humidity;
  let rainChance = results.forecast.forecastday[0].day.daily_chance_of_rain;

  console.log("rainChance", results);
});
