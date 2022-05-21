import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { item, onclick } = props;
  return (
    <Link to={item.href} onClick={onclick}>
      <li className='listItem'>{item.name}</li>
    </Link>
  )
}

export default ListItem