import './style.scss';
import AirQuality from "./AirQuality";

const WeatherDetails: React.FC = () => {
  return (
    <div className='weather-details-wrapper flex flex-between'>
      <AirQuality />
      <AirQuality />
    </div>
  )
}

export default WeatherDetails;