import './SecondaryButton.scss';

const SecondaryButton = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="btnSecondary">{text}</button>
  )
}

export default SecondaryButton