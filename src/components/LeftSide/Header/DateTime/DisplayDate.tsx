
const DisplayDate: React.FC = () => {

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (
    <>
      <p className='small'>
        {today.toLocaleDateString("en-US", options)}
      </p>
    </>
  );
};

export default DisplayDate;