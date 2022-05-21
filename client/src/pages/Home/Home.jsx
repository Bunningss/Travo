import './Home.scss';
import Hero from '../../components/Hero/Hero';
import Destinations from '../Destinations/Destinations';
import Footer from '../../components/Footer/Footer';
import { useEffect, useRef } from 'react';

const Home = ({ active }) => {
  const home = useRef();
  const desti = useRef();

  useEffect(() => {
      if (active) {
    home.current.style.overflow = 'hidden';
  } else {
    home.current.style.overflow = 'auto';
  }
  }, [active]);

  return (
    <div ref={home} className='home'>
      <Hero desti={desti}/>
      <Destinations desti={desti}/>
      <Footer/>
    </div>
  )
}

export default Home