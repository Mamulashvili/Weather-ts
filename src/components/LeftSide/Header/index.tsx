import './style.scss';
import DateTime from './DateTime';
import Welcome from './Welcome';
import Toggler from '../../common/Toggler';

const Header: React.FC = () => {




  return (
    <>
      <DateTime />
      <Welcome />
      <Toggler handleChange={({ target: { checked } }) => console.log(checked)} />
    </>
  )
}

export default Header;