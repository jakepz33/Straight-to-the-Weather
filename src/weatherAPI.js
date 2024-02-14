export default async function fetchWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=03d984259a17467b965230209241201&q=${city}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

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
