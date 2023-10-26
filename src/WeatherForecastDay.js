import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  // Function to calculate and format the maximum temperature
  function maxTemperature() {
    // Retrieve the maximum temperature from the 'props.data' and round it to the nearest whole number
    let temperature = Math.round(props.data.temperature.maximum);
    // Check if the unit is in Fahrenheit; if so, convert the temperature to Fahrenheit
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    // Return the temperature
    return `${temperature}°`;
  }

  // Function to calculate and format the minimum temperature
  function minTemperature() {
    // Retrieve the minimum temperature from the 'props.data' and round it to the nearest whole number
    let temperature = Math.round(props.data.temperature.minimum);
    // Check if the unit is in Fahrenheit; if so, convert the temperature to Fahrenheit
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    // Return the temperature
    return `${temperature}°`;
  }

  // Function to determine and format the day of the week
  function day() {
    // Create a date object based on the timestamp in 'props.data.time'
    let date = new Date(props.data.time * 1000);
    // Extract the day of the week (0-6) from the date
    let day = date.getDay();
    // Define an array
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day mt-2 mb-2">{day()}</div>
      <ForecastIcon code={props.data.condition.icon} size={42} />
      <div className="WeatherForecast-temperatures mt-1">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
