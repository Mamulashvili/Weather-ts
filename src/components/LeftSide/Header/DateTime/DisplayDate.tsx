
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
      <h1>
        {today.toLocaleDateString("en-US", options)}
      </h1>
    </>
  );
};

export default DisplayDate;