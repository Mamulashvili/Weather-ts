/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import sun from '../../../assets/images/sun.png'

type TimeIntervals = 'morning' | 'afternoon' | 'evening';

interface TimeInterval {
  morning: TimeIntervals;
  afternoon: TimeIntervals;
  evening: TimeIntervals;
}

const Welcome: React.FC = () => {
  const [timeInterval, setTimeInterval] = useState<string>('')
  const today: Date = new Date();
  const hours: number = today.getHours();

  const availableIntervals: TimeInterval = {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
  }

  useEffect(() => {
    if (hours > 6 && hours <= 12) return setTimeInterval(availableIntervals.morning);
    if (hours > 12 && hours <= 18) return setTimeInterval(availableIntervals.afternoon);
    if (hours > 18 && hours <= 6) return setTimeInterval(availableIntervals.evening);
  }, [])

  return (
    <>
      <figure className='welcome-figure'>
        <img src={sun} alt='sun' />
        <figcaption>
          Good {timeInterval}!
        </figcaption>
      </figure>
    </>
  )
}

export default Welcome;