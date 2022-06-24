import './style.scss';
import AirQuality from "./AirQuality";
import AstroCard from './AstroCard';
import { useWeatherContext } from '../../../context/WeatherContext';

const WeatherDetails: React.FC = () => {
  const { data: { location } } = useWeatherContext();

  return (
    <div className='weather-details-wrapper flex flex-between flex-start'>
      <AirQuality location={location} />
      <AstroCard location={location} />
    </div>
  )
}

export default WeatherDetails;