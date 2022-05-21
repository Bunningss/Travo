import Card from '../../components/Card/Card';
import './Destinations.scss';
import { destinations } from '../../staticData';

const Destinations = ({ desti }) => {
  return (
    <div ref={desti} className='desti'>
        <h2 className="destiHeader">Check out these EPIC Destinations!</h2>
        <div className="cardContainer">
            {
                destinations.map((item) => (
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Destinations