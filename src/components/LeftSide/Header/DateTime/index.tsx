import DisplayDate from './DisplayDate';
import DisplayTime from './DisplayTime';

const DateTime: React.FC = () => {
  return (
    <div className='datetime-wrapper'>
      <DisplayTime />
      <DisplayDate />
    </div>
  )
}

export default DateTime;