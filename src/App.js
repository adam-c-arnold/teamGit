import React, { Component } from "react";
import "./App.css";
import Nasa from "./Nasa";
import OpenWeather from "./OpenWeather";
import Zomato from "./Zomato";
import { Container, Grid } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      zomatoRest1Name: null,
      zomatoRest1PhotosURL: null,
      zomatoRest2Name: null,
      zomatoRest2PhotosURL: null,
      zomatoRest3Name: null,
      zomatoRest3PhotosURL: null,
      weatherDescription: null,
      weatherTemp: null,
      // fahr: true,
    };
  }

  // handleClick = () => {
  //   this.setState({fahr: !fahr})
  // }

  componentDidMount() {
    let location = this;
    let zData = this;
    let zomatoKey = "0586265890c1a72bf88272b30187f388";
    let wData = this;
    let weatherKey = "ac20f50ab1f3942a55f9aa45dab00f26";

    // **** Get the longitude & latitude for the other API calls. ****

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("latitude is:", position.coords.latitude);
      console.log("longitude is:", position.coords.longitude);
      location.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log("**" + position.coords.latitude);
      console.log(location);

      // **** Zomato API Call ****

      let zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${location.state.latitude}&lon=${location.state.longitude}`;
      console.log("Zomato URL = " + zomatoURL);

      fetch(zomatoURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Key": `${zomatoKey}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Zomato API Result Data");
          console.log(data);
          zData.setState({
            zomatoRest1Name: data.nearby_restaurants[0].restaurant.name,
            zomatoRest2Name: data.nearby_restaurants[1].restaurant.name,
            zomatoRest3Name: data.nearby_restaurants[2].restaurant.name,
            zomatoRest1PhotosURL: data.nearby_restaurants[0].restaurant.thumb,
            zomatoRest2PhotosURL: data.nearby_restaurants[1].restaurant.thumb,
            zomatoRest3PhotosURL: data.nearby_restaurants[2].restaurant.thumb,
          });
        });

      // **** Open Weather API Call ****
      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.state.latitude}&lon=${location.state.longitude}&appid=${weatherKey}`;
      console.log("weatherURL = " + weatherURL);

      fetch(weatherURL, {
        method: "GET",
        headers: {
          Accept: "application.json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Weather Data");
          console.log(data);
          wData.setState({
            weatherDescription: data.weather[0].description,
            weatherTemp: data.main.temp,
          });
        });
    }); // End of navigator.geolocation.getCurrentPosition
  }
  render() {
    return (
      <Container>
        <div className="mainDiv">
          <Grid item xs container direction="column" alignItems="center">
            <header className="App-header">
              <h1>
                Based on your location, here is some vital information for you!
              </h1>
            </header>
            <Grid item alignItems="center">
              <Nasa
                latitude={this.state.latitude}
                longitude={this.state.longitude}
              />
            </Grid>
            <OpenWeather
              weatherDescription={this.state.weatherDescription}
              temp={this.state.weatherTemp}
            />
            <Zomato
              zomatoRest1Name={this.state.zomatoRest1Name}
              zomatoRest2Name={this.state.zomatoRest2Name}
              zomatoRest3Name={this.state.zomatoRest3Name}
              zomatoRest1PhotosURL={this.state.zomatoRest1PhotosURL}
              zomatoRest2PhotosURL={this.state.zomatoRest2PhotosURL}
              zomatoRest3PhotosURL={this.state.zomatoRest3PhotosURL}
            />
          </Grid>
        </div>
      </Container>
    );
  }
}

export default App;
