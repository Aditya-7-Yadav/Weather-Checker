import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
const [city,setCity] = useState("")
const [temp,setTemp] = useState(0)
const [Aqi,setAqi] = useState(0)
const [country, setCountry] = useState("")
const [main,setMain] = useState({})
const [precip,setprecip] = useState(0)
const Key = 'fd48517c7fba433b8d109d7e38af421c';
async function fetchData() {
  try {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=c7d0fa15a01e4e1c99b1aec27955c811&include=minutely`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data)
    setTemp(data.data[0].app_temp)
    setAqi(data.data[0].aqi)
    setprecip(data.data[0].precip)
    setCountry(data.data[0].country_code)
  } catch (e) {
    console.error(e);
  }
}

return (
  <div className="App" style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
    <h1 style={{ color: "#333" }}>Weather App</h1>
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />
      <button
        onClick={fetchData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Search
      </button>
    </div>
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "#555" }}>Temperature: <span style={{ color: "#007BFF" }}>{temp}°C</span></h2>
      <h2 style={{ color: "#555" }}>AQI: <span style={{ color: "#007BFF" }}>{Aqi}</span></h2>
      <h2 style={{ color: "#555" }}>Precipitation: <span style={{ color: "#007BFF" }}>{precip} mm</span></h2>
      <h2 style={{ color: "#555" }}>Country: <span style={{ color: "#007BFF" }}>{country}</span></h2>
    </div>
  </div>
);

}

export default App;
