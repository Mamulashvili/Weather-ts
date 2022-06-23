type Props = {
  src: string;
  hour: number;
  temp: number;
}

const CardItem: React.FC<Props> = ({ src, hour, temp }) => {
  return (
    <>
      <figure>
        <img src={src} alt='sun' />
        <figcaption>
          {hour}
        </figcaption>
      </figure>
      <p>
        {temp} C
      </p>
    </>
  )
}

export default CardItem;