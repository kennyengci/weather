import React, { useEffect, useState } from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [title, setTitle] = useState<string>('Select City')
  const [data, setData] = useState<APIResult>()

  useEffect(() => {
    if (!title) setData(undefined)

    fetch(`/weather-data/${title.toLowerCase()}.json`)
      .then(r => r.json())
      .then(r => setData(r))
  }, [title])

  return (
    <div className="flex flex-col items-center">
      <h2 className="m-4 mb-0 text-gray-600 font-bold text-lg">{title ? title : 'Select City'}</h2>
      <div>
        <CitySelector
          onChange={value => value ? setTitle(value) : setTitle('')}
        />
          <WeatherCard
            data={data}
          />
      </div>
    </div>
  );
}

export default App;

