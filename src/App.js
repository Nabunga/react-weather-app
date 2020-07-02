import React, { Component } from "react";
import "./App.css";

const PLACES = [
  { name: "Moscow", zip: "Moscow" },
  { name: "Barcelona", zip: "Barcelona" },
  { name: "London", zip: "London" },
  { name: "New York", zip: "New York" },
];

function kelvinToCelsius(temp) {
  temp = temp - 273.15;
  temp = temp.toFixed(2);
  return temp;
}

function mileToKilometer(windspeed) {
  windspeed = windspeed * 1.60934;
  windspeed = windspeed.toFixed(2);
  return windspeed;
}

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=1eb308e6ff37dc1cfbe5a711bb5963e8";
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData)
      return (
        <div className="card-body">
          <h5 className="card-title text-center">Loading...</h5>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      );
    const weather = weatherData.weather[0];
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";

    return (
      <React.Fragment>
        <div className="card-body">
          <h5 className="card-title">
            Clear in {weatherData.name}{" "}
            <span className="badge badge-primary">
              {kelvinToCelsius(weatherData.main.temp)}°
            </span>
            <img src={iconUrl} alt={weatherData.description} />
          </h5>
          <p className="card-text">
            <small className="text-muted">
              Weather data is provided by{" "}
              <a href="https://openweathermap.org" target="blank">
                openweathermap.org
              </a>
            </small>
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Today temperature will be from{" "}
            <mark>{kelvinToCelsius(weatherData.main.temp_min)}°</mark> to{" "}
            <mark>{kelvinToCelsius(weatherData.main.temp_max)}°</mark>
          </li>
          <li className="list-group-item">
            Wind speed is <mark>{mileToKilometer(weatherData.wind.speed)} km/hr</mark>.
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  render() {
    const { activePlace } = this.state;
    return (
        <div className="container">
          <div className="row mt-3">
            <div className="col align-self-center">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    {PLACES.map((place, index) => {
                      return (
                        <li key={index} className="nav-item">
                          <a
                            className={
                              index === activePlace
                                ? "nav-link active"
                                : "nav-link"
                            }
                            href="#"
                            onClick={() =>
                              this.setState({ activePlace: index })
                            }
                          >
                            {place.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <WeatherDisplay
                  key={activePlace}
                  zip={PLACES[activePlace].zip}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
