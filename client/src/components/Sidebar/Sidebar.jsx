import './Sidebar.scss';
import ListItem from '../ListItem/ListItem';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { topbarItems } from '../../staticData';

const Sidebar = ({ active,setActive }) => {
  const handleClick = () => {
    setActive(false)
  }
  return (
    <div className={active ? 'sidebar active' : 'sidebar'}>
      <ul className="sidebarList">
        {
          topbarItems.map((item) => (
            <ListItem item={item} key={item.id} onclick={handleClick}/>
          ))
        }
      </ul>
      <SecondaryButton text={"get started"} onclick={handleClick}/>
    </div>
  )
}

export default Sidebar