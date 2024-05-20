import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import "../assets/css/style.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const WeatherMap = () => {
  const [locations, setLocations] = useState([
    { name: "Gunung Bromo", coords: { lat: -8.010460950316721, lng: 112.95308692568163 }, weather: null },
    { name: "Kawah Ijen", coords: { lat: -8.0584, lng: 114.2428 }, weather: null },
    { name: "Pantai Plengkung", coords: { lat: -8.719436338342726, lng: 114.36089717218837 }, weather: null },
    { name: "Taman Nasional Baluran", coords: { lat: -7.8607, lng: 114.3764 }, weather: null },
    { name: "Pulau Sempu", coords: { lat: -8.444715, lng: 112.699234 }, weather: null },
    { name: "Taman Nasional Meru Betiri", coords: { lat: -8.446452338362597, lng: 113.81170434985194 }, weather: null },
    { name: "Taman Nasional Alas Purwo", coords: { lat: -8.675651160340424, lng: 114.45074243120396 }, weather: null },
  ]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const updatedLocations = await Promise.all(
        locations.map(async (location) => {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lat}&lon=${location.coords.lng}&appid=f7db081911421cb37e8f6de536b00dda&units=metric`);
            console.log(`Fetched weather for ${location.name}:`, response.data);
            return { ...location, weather: response.data };
          } catch (error) {
            console.error(`Error fetching weather data for ${location.name}:`, error);
            return location;
          }
        })
      );
      setLocations(updatedLocations);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-map-container" id="maps">
      <h2 className="map-title">Locations</h2>
      <div className="map-container">
        <MapContainer center={[-7.9425, 112.953]} zoom={7} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {locations.map((location, index) => (
            <Marker key={index} position={location.coords}>
              <Popup>
                <div className="popup-content">
                  <h2>{location.name}</h2>
                  {location.weather ? (
                    <>
                      <img className="weather-icon" src={`http://openweathermap.org/img/wn/${location.weather.weather[0].icon}@2x.png`} alt={location.weather.weather[0].description} />
                      <p className="weather-description">{location.weather.weather[0].description}</p>
                      <div className="weather-details">
                        <div>Temperature: {location.weather.main.temp.toFixed(1)}°C</div>
                        <div>Humidity: {location.weather.main.humidity}%</div>
                        <div>Wind Speed: {location.weather.wind.speed} m/s</div>
                      </div>
                    </>
                  ) : (
                    <p>Loading weather data...</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
