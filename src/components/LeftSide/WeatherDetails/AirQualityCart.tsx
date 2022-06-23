import Card from "../../common/Card";

type Props = {
  name: string;
  amount: any;
  cartStyle?: string;
}

const AirQualityCart: React.FC<Props> = ({ name, amount, cartStyle }) => {
  return (
    <>
      <Card cardStyle={`air-quality-cart ${cartStyle || ''}`}>
        <p className='name'> {amount.toFixed(1)} </p>
        <p className='amount'>{name.substring(0, 5).toUpperCase()} </p>
      </Card>
    </>
  )
}

export default AirQualityCart;