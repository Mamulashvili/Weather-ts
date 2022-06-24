import './style.scss';
import Input from "../common/Input";
import CurrentWeather from './CurrentWeather';
import CurrentDetails from './CurrentDetails';
import { useWeatherContext } from '../../context/WeatherContext';


const RightSide: React.FC = () => {
  const { data } = useWeatherContext();


  return (
    <div className='right-wrapper main-wrapper'>
      {
        data && (
          <>
            <CurrentWeather data={data} />
            <CurrentDetails data={data} />
          </>
        )
      }
    </div>
  )
}

export default RightSide;