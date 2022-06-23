import './style.scss';
import Header from './Header';
import Forecast from './Forecast';
import WeatherDetails from './WeatherDetails';

const Content: React.FC = () => {

  return (
    <div className='left-wrapper main-wrapper brd'>
      <Header />
      <Forecast />
      <WeatherDetails />
    </div>
  )
}

export default Content;