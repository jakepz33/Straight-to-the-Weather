const App = function () {
  function ready() {
    return "HELLO READY";
  }

  return { ready };
};

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
  };

  displayData(resultsObj);
}

function displayData(resultsObj) {
  const city = document.querySelector(".city-header");
  const weatherDescription = document.querySelector(".weather-description");
  const temp = document.querySelector(".temp");
  const date = document.querySelector(".date");
  const current_time = document.querySelector(".current-time");

  city.textContent = `${resultsObj.cityName}, ${resultsObj.region}`;
  weatherDescription.textContent = resultsObj.condition;
  temp.textContent = resultsObj.temp;
  date.textContent = resultsObj.date;
  current_time.textContent = resultsObj.currentTime;
}

function formatDate(dateString) {
  const inputDate = new Date(dateString);

  // Define arrays for days and months
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, date, month, and year
  const day = daysOfWeek[inputDate.getDay()];
  const date = inputDate.getDate();
  const month = monthsOfYear[inputDate.getMonth()];
  const year = inputDate.getFullYear();

  // Function to get the ordinal indicator for the date
  function getOrdinalIndicator(date) {
    if (date > 10 && date < 20) {
      return "th";
    }
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  // Concatenate the formatted date string
  const formattedDate = `${day}, ${date}${getOrdinalIndicator(
    date
  )} ${month} ${year}`;

  return formattedDate;
}

function convertTime12HourFormat(timeString) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(":").map(Number);

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  let hours12 = hours % 12;
  hours12 = hours12 || 12; // 0 should be treated as 12

  // Concatenate the result
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export { App, cityDescription };

// let cityName = results.location.name;
//   let region = results.location.region;
//   let condition = results.current.condition.text;
//   let temp = results.current.temp_f;
//   let date = results.forecast.forecastday[0].date;
//   let timeAndDate = results.location.localtime.split(" ");
//   let currentTime = time[1];
