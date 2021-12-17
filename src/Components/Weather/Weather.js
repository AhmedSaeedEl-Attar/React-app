import React, { Component } from "react";
import "./Weather.css";

class WeatherForm extends Component {
  render() {
    return (
      <form className="weatherform" onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Entre City" />
        <input type="text" name="country" placeholder="Entre Country" />
        <button type="submit">Entre</button>
      </form>
    );
  }
}

function WeatherShow(props) {
  const { humidity, temp, city, country, weather, wind, error } =
    props.dataWeather;
  return (
    <React.Fragment>
      {humidity && (
        <div className="showdata">
          {humidity && <p> Humidity : {humidity}</p>}
          {temp && <p> Temp : {temp}</p>}
          {city && <p> City : {city}</p>}
          {country && <p> Country : {country}</p>}
          {weather && <p> Weather : {weather}</p>}
          {wind && <p> Wind : {wind}</p>}
          {error && <p>Error : {error} </p>}
        </div>
      )}
      {error && (
        <div className="showdata">
          {humidity && <p> Humidity : {humidity}</p>}
          {temp && <p> Temp : {temp}</p>}
          {city && <p> City : {city}</p>}
          {country && <p> Country : {country}</p>}
          {weather && <p> Weather : {weather}</p>}
          {wind && <p> Wind : {wind}</p>}
          {error && <p>Error : {error} </p>}
        </div>
      )}
    </React.Fragment>
  );
}

///////////////////////////
const key = "32f89de1a5bb53e6d70c04b8e846f449";
// https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=32f89de1a5bb53e6d70c04b8e846f449
class Weather extends Component {
  state = {
    humidity: "",
    temp: "",
    city: "",
    country: "",
    weather: "",
    wind: "",
    error: "",
  };
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let Api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
    );
    let data = await Api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        humidity: data.main.humidity,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].description,
        wind: data.wind.speed,
        error: "",
      });
    } else {
      this.setState({
        humidity: "",
        temp: "",
        city: "",
        country: "",
        weather: "",
        wind: "",
        error: " No Data to Show",
      });
    }
  };
  render() {
    return (
      <div className="WeratherSeaction">
        <div className="container">
          <div className="weathercontent">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherShow dataWeather={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
