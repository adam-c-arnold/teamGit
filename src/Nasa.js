import React from "react";
import MainCard from "./MainCard";

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

  return (
    <div>
      <h3>Nasa component</h3>
      <MainCard media={url} />
    </div>
  );
};

export default Nasa;
