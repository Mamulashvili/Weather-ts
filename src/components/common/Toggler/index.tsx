import './style.scss';

interface Props {
  handleChange: (e: any) => void;
}

const Toggler: React.FC<Props> = ({ handleChange }) => {
  return (
    <>
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          className="dn"
          id="dn"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle-handler">
          </span>
        </label>
      </div>
    </>
  )
}

export default Toggler;