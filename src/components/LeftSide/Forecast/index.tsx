import './style.scss';
import Card from '../../common/Card';
import CardItem from './CardItem';
import { useWeatherContext } from '../../../context/WeatherContext';


const Forecast: React.FC = () => {
  const { data } = useWeatherContext();
  const hours = new Date().getHours();

  return (
    <section className='forecast'>
      {
        data && data?.forecast && (
          data.forecast.forecastday[0].hour.map((item: any, index: number) => {
            if (parseInt(item?.time.split(' ')[1].split(':')[0]) >= hours - 1) {
              return (
                <Card key={item.time_epoch}>
                  <CardItem
                    src={item?.condition.icon}
                    hour={item?.time.split(' ')[1]}
                    temp={item.temp_c}
                  />
                </Card>
              )
            }
            return null;
          })
        )
      }
    </section>
  )
}

export default Forecast;