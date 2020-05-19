import React, { Component } from "react";
//import "./App.css";
import Nasa from "./Nasa";
import OpenWeather from "./OpenWeather";
import Zomato from "./Zomato";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      zomatoData: null,
    };
  }

  componentDidMount() {
    let location = this;
    let zData = this;
    let zomatoKey = "0586265890c1a72bf88272b30187f388";
    // let zomatoURL;
    
    // Get the longitude & latitude for the other API calls.
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("latitude is:", position.coords.latitude);
      console.log("longitude is:", position.coords.longitude);
      location.setState ({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log('**' + position.coords.latitude);
      console.log(location);

      let zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${location.state.latitude}&lon=${location.state.longitude}`
      console.log('Zomato URL = ' + zomatoURL);
  
      // const fetchAPI = () => {
      fetch (zomatoURL, {
        method: 'GET',
        headers: {  
            'Accept': 'application/json',
            'User-Key': `${zomatoKey}`
        }
      })
        .then((res) => 
            res.json()
        )
        .then((data) => {
            console.log('Zomato API Result Data');
            console.log(data);
            zData.setState ({
              zomatoData: data,
            });
      
        });
    // };      
      



    });  // End of navigator.geolocation.getCurrentPosition
    

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Based on your location, here is some vital information for you!
          </h1>
        </header>
        <Nasa latitude={this.state.latitude} longitude={this.state.longitude} />
        {/* <OpenWeather latitude={this.state.latitude} longitude={this.state.longitude} /> */}
        <Nasa data={this.state.zomatoData} />
      </div>
    );
  }
}

export default App;