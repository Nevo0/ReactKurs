import React from "react";
import "./Result.css";

const Result = props => {
  const {
    city,
    data,
    sunrise,
    sunset,
    pressure,
    wind,
    temp,
    error
  } = props.weather;

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h3>
          Pogoda dla: <strong>{city}</strong>{" "}
        </h3>
        <p>{data}</p>
        <p>
          Temperatura: {temp} &#176; <sup>o</sup>C{/* encje */}
        </p>
        <p>Aktualna siła wiatru: {wind} m/s</p>
        <p>Aktualne ciśnienie" {pressure} kPh</p>
        <p>Wschód {sunriseTime}</p>
        <p>Zachód {sunsetTime}</p>
      </>
    );
  }
  return (
    <div className="result">
      {error ? `Nie znalazłem miasta ${city}` : content}
    </div>
  );
};

export default Result;
