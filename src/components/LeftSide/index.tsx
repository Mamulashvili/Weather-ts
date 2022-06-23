import './style.scss';
import Header from './Header';
import Forecast from './Forecast';

const Content: React.FC = () => {

  return (
    <div className='left-wrapper main-wrapper brd'>
      <Header />
      <Forecast />
    </div>
  )
}

export default Content;