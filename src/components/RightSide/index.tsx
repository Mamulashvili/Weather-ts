import './style.scss';
import Input from "../common/Input";
import CurrentWeather from './CurrentWeather';

const RightSide: React.FC = () => {
  return (
    <div className='right-wrapper main-wrapper brd'>
      <CurrentWeather />
    </div>
  )
}

export default RightSide;