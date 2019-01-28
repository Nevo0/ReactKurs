import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    city: null,
    data: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    wind: "",
    temp: "",
    error: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // handleCitySubmit = e => {
  //   e.preventDefault();
  //   // console.log("Potwierdz")
  //   const APIKEY = "b048c5b0a323a1ca4e35e47473cfa10b";
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${
  //     this.state.value
  //   }&APPID=${APIKEY}&units=metric`;
  //   const API2 = "https://randomuser.me/api/?results=1";

  //   fetch(API)
  //     .then(response => {
  //       console.log(response);

  //       if (response.ok) {
  //         return response;
  //       }
  //       console.log(response.ok);

  //       throw Error("Błą!!!!!!!!");
  //     })
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       const time = new Date().toLocaleString();
  //       this.setState(prevState => ({
  //         error: false,
  //         city: data.name,
  //         data: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         pressure: data.main.pressure,
  //         temp: data.main.temp,
  //         wind: data.wind.speed
  //       }));
  //     })
  //     .catch(err =>
  //       this.setState(prevState => ({
  //         error: true,
  //         city: prevState.value
  //       }))
  //     );
  // };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.value > 3);
    if (this.state.value.length < 3) return;
    if (prevState.value !== this.state.value) {
      const APIKEY = "b048c5b0a323a1ca4e35e47473cfa10b";
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIKEY}&units=metric`;
      const API2 = "https://randomuser.me/api/?results=1";

      fetch(API)
        .then(response => {
          // console.log(response);

          if (response.ok) {
            return response;
          }
          console.log(response.ok);

          throw Error("Błą!!!!!!!!");
        })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            error: false,
            city: data.name,
            data: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            pressure: data.main.pressure,
            temp: data.main.temp,
            wind: data.wind.speed
          }));
        })
        .catch(err =>
          this.setState(prevState => ({
            error: true,
            city: prevState.value
          }))
        );
    }
  }

  componentDidMount() {
    console.log("zamontowany");
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />

        <Result
          weather={this.state}
          // city={this.state.value}
          // data={this.state.data}
          // sunrise={this.state.sunrise}
          // sunset={this.state.sunset}
          // pressure={this.state.pressure}
          // wind={this.state.wind}
          // temp={this.state.temp}
          // error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
