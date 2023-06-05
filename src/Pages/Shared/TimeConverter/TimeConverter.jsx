export const timeConverter = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
};

//utcTimestamp = "2021-08-31T18:30:00.000Z" to time am/pm
export const timeConverter2 = (utcTimestamp) => {
  const date = new Date(utcTimestamp);

  const localTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return localTime;
};

export const utcToConvert = (utcTimestamp) => {
  const date = new Date(utcTimestamp);
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  return time;
};
