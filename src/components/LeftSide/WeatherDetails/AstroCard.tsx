import Card from "../../common/Card";
import sun from '../../../assets/images/sun-yellow.png';
import moon from '../../../assets/images/moon.png';
import moonRise from '../../../assets/images/moon-rise.png';
import moonSet from '../../../assets/images/moon-set.png';
import { useWeatherContext } from '../../../context/WeatherContext';

type Props = {
  location: {
    name?: string
  };
}

const AstroCard: React.FC<Props> = ({ location }) => {
  const { data: { forecast } } = useWeatherContext();
  const astro = forecast?.forecastday[0]?.astro || null;

  return (
    <>
      {
        forecast && (
          <Card cardStyle="detail-card astro-card">
            <div className='flex flex-between'>
              <h3 className='card-title'>Sunrise & Sunset </h3>
            </div>
            <div>
              <Card cardStyle='astro-card-inner air-figure'>
                <p className='astro-location'> {location?.name || ''} </p>
                <div className='flex flex-between'>
                  <figure className='astro-figure flex flex-align-center'>
                    <img src={sun} alt='Sun icon' />
                    <figcaption className='flex flex-column flex-align-baseline'>
                      <p>  Sunrise </p>
                      <small> {astro?.sunrise} </small>
                    </figcaption>
                  </figure>
                  <figure className='astro-figure flex flex-align-center'>
                    <img src={moon} alt='Sun icon' />
                    <figcaption className='flex flex-column flex-align-baseline'>
                      <p> Sunset</p>
                      <small> {astro?.sunset} </small>
                    </figcaption>
                  </figure>
                </div>
              </Card>

              <Card cardStyle='astro-card-inner air-figure'>
                <p className='astro-location'> Moon Phase: {astro.moon_phase} </p>
                <div className='flex flex-between'>
                  <figure className='astro-figure flex flex-align-center'>
                    <img src={moonRise} alt='Moon rise icon' />
                    <figcaption className='flex flex-column flex-align-baseline'>
                      <p>  Moonrise </p>
                      <small> {astro?.moonrise} </small>
                    </figcaption>
                  </figure>
                  <figure className='astro-figure flex flex-align-center'>
                    <img src={moonSet} alt='Moon set icon' />
                    <figcaption className='flex flex-column flex-align-baseline'>
                      <p> Moonset</p>
                      <small> {astro?.moonset} </small>
                    </figcaption>
                  </figure>
                </div>
              </Card>
            </div>
          </Card >
        )
      }
    </>
  )
}

export default AstroCard;