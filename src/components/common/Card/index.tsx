import './style.scss';

interface Props {
  cardStyle?: string;
  children?: React.ReactNode
}

const Card: React.FC<Props> = ({ cardStyle, children }) => {
  return (
    <div className={`card card-wrapper ${cardStyle || ''}`}>
      {children}
    </div>

  )
}

export default Card;