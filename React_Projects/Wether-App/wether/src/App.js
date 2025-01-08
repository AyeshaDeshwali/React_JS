import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "10278a56b96072867511218b009376eb";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            placeholder="Enter city name"
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {Object.keys(data).length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img
              className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt="weather icon"
            />
            <h5 className="weathorCity">{data?.name}</h5>
            <h6 className="weathorTemp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>

            <div className="detailsGrid">
              <div className="detailItem">
                <h6>Feels Like:</h6>
                <p>{(data?.main?.feels_like - 273.15).toFixed(2)}°C</p>
              </div>
              <div className="detailItem">
                <h6>Humidity:</h6>
                <p>{data?.main?.humidity}%</p>
              </div>
              <div className="detailItem">
                <h6>Pressure:</h6>
                <p>{data?.main?.pressure} hPa</p>
              </div>
              <div className="detailItem">
                <h6>Visibility:</h6>
                <p>{data?.visibility / 1000} km</p>
              </div>
              <div className="detailItem">
                <h6>Wind Speed:</h6>
                <p>{data?.wind?.speed} m/s</p>
              </div>
              <div className="detailItem">
                <h6>Wind Direction:</h6>
                <p>{data?.wind?.deg}°</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
