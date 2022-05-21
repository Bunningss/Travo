import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import './Hero.scss';

const Hero = ({ desti }) => {
  const handleClick = () => {
    desti.current.scrollIntoView({
      behavior: "smooth",
      duration: 800
    });
  }
  return (
    <div className='hero'>
      <div className="heroContainer">
        <h1 className="title">adventure awaits</h1>
        <h5 className="subtitle">What are you weaiting for ?</h5>
        <div className="buttonContainer">
          <SecondaryButton text={"get started"} onclick={handleClick}/>
          <PrimaryButton text={"watch videos"}/>
        </div>
      </div>
    </div>
  )
}

export default Hero