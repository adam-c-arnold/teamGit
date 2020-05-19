import React from "react";

const Nasa = (props) => {
  console.log(props);
  let lon = props.longitude;
  let lat = props.latitude;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const key = "rBwmSuajR0IKLPeX9zyS8oEN6vbWNgk29wIw4f8l";
  const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${today}&api_key=${key}`;

  const fetchAPI = () => {
    fetch(url)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3 onLoad={fetchAPI}>Nasa component</h3>
      <button onClick={fetchAPI}>Click me for location</button>
    </div>
  );
};

export default Nasa;
