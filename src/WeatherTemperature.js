import React from "react";
import "./WeatherInfo";
import "./WeatherTemperature.css";
import "./App";

export default function WeatherTemperature(props) {
  // Function to switch the unit to Celsius when a link is clicked
  function showCelsius(event) {
    event.preventDefault();
    // Call the `setUnit` function as a prop to update the unit to "celsius"
    props.setUnit("celsius");
  }

  // Function to switch the unit to Fahrenheit when a link is clicked
  function showFahrenheit(event) {
    event.preventDefault();
    // Call the `setUnit` function as a prop to update the unit to "fahrenheit"
    props.setUnit("fahrenheit");
  }

  // Convert temperature from Celsius to Fahrenheit
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  // Conditional rendering based on the value of the 'unit' prop
  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <strong className="linkUnit">°C</strong> |{" "}
          <a href="/" onClick={showFahrenheit}>
            <span className="linkNone">°F</span>
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            <span className="linkNone">°C</span>
          </a>{" "}
          | <strong className="linkUnit">°F</strong>
        </span>
      </span>
    );
  }
}
