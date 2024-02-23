import React from 'react'
import "../App.css";

const WheatherMain = ({ weatherMain }) => {
  const {main, weather} = weatherMain
  return (
  <div className="main">
    <img src='https://openweathermap.org/img/wn/10d@2x.png' alt="weathericon" />
    <article>
      <h2>{main.temp}</h2>
      <h3>{weather[0].main}</h3>
    </article>
  </div>
  )
}

export default WheatherMain
