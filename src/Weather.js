import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // State variables to manage weather data, default city, and temperature unit
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  // Function to handle the response from the weather API
  function handleResponse(response) {
    // Update the weatherData state with the received data
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      temperatureMax: response.data.temperature.minimum,
      temperatureMin: response.data.temperature.maximum,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  // Function to make an API request
  function search() {
    const apiKey = "b13b374bef64oac0e068e7t94aa7beef";
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    // API get request and call handleResponse with the data
    axios.get(apiUrl).then(handleResponse);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the search function
    search();
  }

  // Function to handle city input changes
  function handleCityChange(event) {
    // Update the city state with the input value
    setCity(event.target.value);
  }

  // Conditional rendering based on weather weatherData is ready
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus={true}
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary location-icon w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo unit={unit} setUnit={setUnit} data={weatherData} />
        <br />
        <WeatherForecast unit={unit} coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    // If weather data is not ready, initiate a search and display "Loading..."
    search();
    return "Loading...";
  }
}
