import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nicole-baylis/"
            target="_blank"
            rel="noreferrer"
          >
            Nicole Baylis
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NicoleBay/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
