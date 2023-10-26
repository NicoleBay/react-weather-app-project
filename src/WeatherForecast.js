import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  // Indicates whether the data has been loaded
  let [loaded, setLoaded] = useState(false);
  // Stores the forecast data
  let [forecast, setForecast] = useState(null);

  // Reset the loaded state whenever the props.coordinates change
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  // Function to handle the response from the API
  function handleResponse(response) {
    // Stores daily forecast data in state
    setForecast(response.data.daily);
    // Mark data as loaded
    setLoaded(true);
  }

  // Function to load weather data from the API
  function load() {
    let apiKey = "b13b374bef64oac0e068e7t94aa7beef";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

    // Make an API request using Axios and call handleResponse when data is received
    axios.get(apiUrl).then(handleResponse);
  }

  // Conditional rendering based on the loaded state
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              // Loop showing forecast for 6 days
              return (
                <div className="col mb-4 fixed-row" key={index}>
                  <WeatherForecastDay data={dailyForecast} unit={props.unit} />
                </div>
              );
            } else {
              return null;
              // Return null for days beyond the first 6
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
