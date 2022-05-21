import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to='' className='card'>
        <div className="imgContainer">
          <img src={item.img} alt="" className="cardImg" />
        </div>
        <div className="textZone">
            <p className="cardDesc">Lorem ipsum dolor sit amet !</p>
        </div>
    </Link>
  )
}

export default Card