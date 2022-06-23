/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { useWeatherContext } from './context/WeatherContext';
import { getLocation, getForecast } from './api';

function App() {

  const { setData } = useWeatherContext();

  useEffect(() => {
    (async () => {
      const { data: { city } } = await getLocation() || 'London';
      const { data } = await getForecast(city, true);
      setData(data);
    })();
  }, [])

  return (
    <div className="App flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
