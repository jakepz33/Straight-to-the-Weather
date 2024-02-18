export function convertTime12HourFormat(timeString) {
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
