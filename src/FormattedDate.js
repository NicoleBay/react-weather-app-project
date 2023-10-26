import React from "react";

export default function FormattedDate(props) {
  // Array to store the names of days of the week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Get the day of the week based on the 'date' prop
  let day = days[props.date.getDay()];
  // Get the hour from the 'date' prop
  let hours = props.date.getHours();
  // Add a leading zero if the hour is less than 10 for two-digit formatting
  if (hours < 10) {
    hours = `0${hours}`;
  }
  // Get the minutes from the 'date' prop
  let minutes = props.date.getMinutes();
  // Add a leading zero if the minutes are less than 10 for two-digit formatting
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // Return the formatted day and time
  return (
    <div>
      <i className="fa-regular fa-clock"></i> Last updated: {day} {hours}:
      {minutes}
    </div>
  );
}
