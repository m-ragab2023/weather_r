import React, { Component } from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

const Api_Key = "479b1677fe3377fe4e3c8156e8c270a1";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getweather = async (e) => {
    e.preventDefault();
    const City = e.target.elements.City.value;
    const Country = e.target.elements.Country.value;
    // console.log(City ,Country);
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}%2C${Country}&appid=${Api_Key}`
    );
    const data = await api.json();

    if (City && Country) {
      this.setState({
        tempreature: data.main.tem,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please Enter Data ",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="form-container">
          <Form getweather={this.getweather} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default App;
