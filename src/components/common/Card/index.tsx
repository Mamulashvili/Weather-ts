import './style.scss';

interface Props {
  cardStyle?: string;
  children?: React.ReactNode
}

const Card: React.FC<Props> = ({ cardStyle, children }) => {
  return (
    <div className={`brd card card-wrapper ${cardStyle}`}>
      {children}
    </div>

  )
}

export default Card;