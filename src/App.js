import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("latititude is:", position.coords.latitude);
      console.log("longititude is:", position.coords.longitude);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Header</h1>
        </header>
      </div>
    );
  }
}

export default App;
