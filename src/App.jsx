import React, { useState } from 'react';
import './App.css';




const ClimaApp = () => {
  const API_KEY = 'd699c27cade2955276a9fe7bcbc98e7b';
  const [ciudad, setCiudad] = useState('Puebla');
  const [clima, setClima] = useState({
    name: 'Puebla',
    sys: { country: 'Puebla' },
    main: { temp: 25, humidity: 60 },
    weather: [{ description: 'Cielo despejado' }],
    wind: { speed: 5 },
  });


  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
  };

  return (
    <div className="App">
      <h1>Aplicación del Clima</h1>
      <label htmlFor="ciudad">Ciudad:</label>
      <input
        type="text"
        id="ciudad"
        value={ciudad}
        onChange={handleChangeCiudad}
        placeholder="Ingrese la ciudad"
      />

      <div>
        <h2>{clima.name}, {clima.sys && clima.sys.country}</h2>
        <p>Temperatura: {clima.main && clima.main.temp}°C</p>
        <p>Descripción: {clima.weather && clima.weather[0].description}</p>
        <p>Humedad: {clima.main && clima.main.humidity}%</p>
        <p>Viento: {clima.wind && clima.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default ClimaApp;




