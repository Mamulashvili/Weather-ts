/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../../common/Card";
import { useWeatherContext } from '../../../context/WeatherContext';
import AirQualityCart from "./AirQualityCart";
import wind_1 from '../../../assets/images/wind-1.png'
import wind_2 from '../../../assets/images/wind-2.png'
import wind_3 from '../../../assets/images/wind-3.png'
import wind_4 from '../../../assets/images/wind-4.png'

type airQualityIndexStausType = 'Good' | 'Moderate' | 'Unhealthy';

const AirQuality: React.FC = () => {
  const { data: { location } } = useWeatherContext();
  const { data: { current: weather } } = useWeatherContext();

  const airQualityIndex: number = weather?.air_quality['us-epa-index'] || 1;
  const airQualityIndexStaus: airQualityIndexStausType = airQualityIndex === 1 ? 'Good' :
    (airQualityIndex === 2 ? 'Moderate' : 'Unhealthy')
  const icon: any = {
    wind_1,
    wind_2,
    wind_3,
    wind_4,
  }

  return (
    <>
      <Card cardStyle="detail-card">
        <div className='flex flex-between'>
          <h3 className='card-title'> Air Quality Index </h3>
          <h3 className='card-title-light'> {location?.name || ''} </h3>
        </div>
        <div>
          <figure className='air-figure flex flex-align-center'>
            <img src={icon[`wind_${airQualityIndex}`]} alt='Air Quality Icon' />
            <figcaption className='flex flex-column flex-align-baseline'>
              <p className={`c-${airQualityIndexStaus.toLowerCase()}`}>
                {airQualityIndexStaus}
              </p>
              <small className='card-title-light'> A perfect day for a walk! </small>
            </figcaption>
          </figure>
          <div
            className={`flex air-quality-cart-wrapper cart-${airQualityIndexStaus.toLowerCase()}`}>
            {
              weather && Object.entries(weather?.air_quality).map((item) => {
                console.log(typeof item[1])
                return (
                  <AirQualityCart
                    name={item[0]}
                    amount={item[1] || 0}
                  />
                )
              })
            }
          </div>
        </div>
      </Card>
    </>
  )
}

export default AirQuality;