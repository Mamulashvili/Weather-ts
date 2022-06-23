import './style.scss';
import Card from '../../common/Card';
import { useEffect } from 'react';
// import weather_icon_sun from '../../../assets/images/forecast/sun.png';
import { getLocation } from '../../../api';


const Forecast: React.FC = () => {

  useEffect(() => {
    // getLocation();
  }, [])

  return (
    <section className='forecast brd'>
      <Card>
        <figure>
          {/* <img src={weather_icon_sun} alt='sun' /> */}
          <figcaption>
            Sun
          </figcaption>
        </figure>
        <p>
          28 C
        </p>
      </Card>
      <Card>
        <figure>
          {/* <img src={weather_icon_sun} alt='sun' /> */}
          <figcaption>
            Sun
          </figcaption>
        </figure>
        <p>
          28 C
        </p>
      </Card>
    </section>
  )
}

export default Forecast;