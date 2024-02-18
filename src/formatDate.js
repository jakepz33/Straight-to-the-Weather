export function formatDate(dateString) {
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
