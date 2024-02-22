import "./styles/index.css";
import { cityDescription } from "./app";
import getMetrics from "./metrics";
import fetchWeather from "./weatherAPI";
import cloud from "./images/cloud.png";

const form = document.querySelector(".search-form");
const backgroundImg = document.querySelector(".cloud");
backgroundImg.src = cloud;

window.onload = async function () {
  var cityDiv = document.querySelector(".city-description");
  cityDiv.classList.add("slide-In2");
  const defaultCity = "San Francisco";
  const results = await fetchWeather(defaultCity);
  console.log("Initial load");

  cityDescription(results);
  getMetrics(results);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form from being submitted
  var cityDiv = document.querySelector(".city-description");

  const searchInput = document.querySelector("input[type=text]");
  const city = searchInput.value;
  searchInput.value = "";

  console.log(city);

  const results = await fetchWeather(city);

  if (results === false) {
    throwError();
  } else {
    cityDescription(results);
    getMetrics(results);

    if (cityDiv.classList.contains("slide-In2")) {
      cityDiv.classList.remove("slide-In2");
      cityDiv.offsetWidth;
      cityDiv.classList.add("slide-In2");
    } else {
      cityDiv.classList.add("slide-In2");
    }
  }
});

function throwError() {
  const errorMessage = document.querySelector(".error-message");
  console.log(errorMessage);
  errorMessage.style.display = "block";

  if (errorMessage.classList.contains("slide-In1")) {
    errorMessage.style.display = "none";
    errorMessage.classList.remove("slide-In1");
    errorMessage.offsetWidth;
    errorMessage.classList.add("slide-In1");
    errorMessage.style.display = "block";
  } else {
    errorMessage.classList.add("slide-In1");
  }
}
