import Card from "../common/Card";
import drop from '../../assets/images/drop.png';
import wind from '../../assets/images/wind.png';

type Props = {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
      wind_kph: number;
      humidity: number;
    }
    location?: {
      name: string;
    };
  }
}

const CurrentWeather: React.FC<Props> = ({ data }) => {
  const { current: weather } = data;
  const { location } = data;
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric'
  }

  return (
    <>
      {
        data && location && (
          <Card cardStyle="current-weather-wrapper">
            <h4> {location.name} </h4>
            <figure>
              <img src={weather.condition.icon} alt="Weather icon big" />
              <figcaption>
                <p className='date'>
                  Today, {new Date().toLocaleDateString("en-US", dateFormat)}
                </p>
                <p className='temperature'> {weather.temp_c} </p>
                <p className='condition'> {weather.condition.text} </p>
              </figcaption>
            </figure>
            <div className='desc'>
              <div className='flex flex-center'>
                <figure className="flex">
                  <img src={drop} alt="Drop icon" />
                  <figcaption> Wind </figcaption>
                </figure>
                <p> {weather.wind_kph} km/h </p>
              </div>

              <div className='flex flex-center'>
                <figure className="flex">
                  <img src={wind} alt="Wind icon" />
                  <figcaption> Hum </figcaption>
                </figure>
                <p> {weather.humidity}% </p>
              </div>
            </div>
          </Card>
        )
      }
    </>
  )
}

export default CurrentWeather;