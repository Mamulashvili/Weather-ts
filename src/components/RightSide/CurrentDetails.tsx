import Card from "../common/Card";

type Props = {
  data: {
    current: {
      feelslike_c: number;
      feelslike_f: number;
      gust_kph: number;
      gust_mph: number;
      humidity: number;
      last_updated: string;
      pressure_in: number;
      pressure_mb: number;
      temp_c: number;
      temp_f: number;
      uv: number;
      vis_km: number;
      wind_degree: number;
      wind_dir: string;
      wind_kph: number;
      cloud: number;
    }
  }
}

const CurrentDetails: React.FC<Props> = ({ data }) => {
  const { current: weather } = data;

  return (
    <>
      {
        weather && (
          <Card cardStyle="current-details-card">
            <h4> Weather status </h4>
            <div>
              <p>UV index : {weather.uv}</p>
              <p>Wind degree : {weather.wind_degree}</p>
            </div>
            <div>
              <p>Wind direction : {weather.wind_dir}</p>
              <p>Wind kph:{weather.wind_kph}</p>
            </div>
            <div>
              <p>gust_kph: {weather.gust_kph}</p>
              <p>cloud: {weather.cloud}</p>
            </div>
          </Card>
        )
      }
    </>
  )
}

export default CurrentDetails;