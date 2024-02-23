import "./App.css";
import { useState } from "react";
import WheatherMain from "./component/WheatherMain";
import WeatherDetails from "./component/WeatherDetails";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState("");

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=33c92b0552e0eea71460739025382726`;

  const getWeatherApi = async (API_URL) => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setWeather(data);
      console.log(data);
      return data;
    } catch (error) {
      throw error("Error", error);
    }
  };

  const handleApiCall = async (e) => {
    if (e.key === "Enter") {
      if (!latitude || !longitude) {
        alert("Latitude and longitude are required.");
        return;
      }

      getWeatherApi(API_URL);
    }
  };

  const dateFormat = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayOfMonth = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  };

  return (
    <div className="container">
      <header className="header">
        <input
          type="number"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          style={{ marginBottom: 10, padding: 5 }}
          required
        />
        <input
          type="number"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          onKeyDown={(e) => handleApiCall(e)}
          style={{ marginBottom: 10, padding: 5 }}
        />
      </header>
      {weather && (
        <div>
          <section>
            <h1>
              {weather.name},{weather.sys.country}
            </h1>
            <p>{dateFormat(weather.dt)}</p>
          </section>
          <section className="wheatherdet">
            <WheatherMain weatherMain={weather} />
            <WeatherDetails weather={weather} />
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
