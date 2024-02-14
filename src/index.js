import "./index.css";
import { App } from "./app";
import fetchWeather from "./weatherAPI";

console.log("Hello world");
const newApp = App();
console.log(newApp.ready());

async function main() {
  const city = prompt("Enter the city name:");
  const results = await fetchWeather(city);

  console.log("results", results);
}

main();
// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=03d984259a17467b965230209241201&q=San Diego",
//   { mode: "cors" }
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
