import React from 'react';
import "../App.css";

const WeatherDetails = ({ weather }) => {
  const { main, wind, sys, clouds } = weather;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="grid">
      <div>{main.temp_max}° High</div>
      <div>{wind.speed} mph Wind</div>
      <div>{formatTime(sys.sunrise)} Sunrise</div>
      <div>{clouds.all} % Rain</div>
      <div>{main.temp_min}° Low</div>
      <div>{formatTime(sys.sunset)} Sunset</div>
    </div>
  );
  
};

export default WeatherDetails;
