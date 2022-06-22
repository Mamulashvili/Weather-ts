import './style.scss';
import DateTime from './DateTime';
import Welcome from './Welcome';

const Header: React.FC = () => {
  return (
    <>
      <DateTime />
      <Welcome />
    </>
  )
}

export default Header;