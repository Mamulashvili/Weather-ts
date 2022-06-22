import { useEffect, useState } from 'react';

const DisplayTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    console.log('Only on initial render');
    const date: Date = new Date();
    setTime(`${date.getHours()}:${date.getMinutes()}`)
  }, [])

  useEffect(() => {
    const intervalId: number = window.setInterval(() => {
      const date: Date = new Date();
      const minutes = date.getMinutes();
      setTime(`${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`)
    }, 1000);

    return () => clearInterval(intervalId)
  })

  return (
    <>
      <h1 className='heading-time'> {time} </h1>
    </>
  )
}

export default DisplayTime;