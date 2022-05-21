import './Topbar.scss';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom';
import { topbarItems } from '../../staticData';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import Hamburger from '../Hamburger/Hamburger';
import { useEffect, useRef } from 'react';

const Topbar = ({ active, setActive }) => {
  const topbar = useRef();
  useEffect(() => {
      if (active) {
    topbar.current.style.borderBottom = `1px solid #fff`;
  } else {
    topbar.current.style.border = `none`;
  }
  }, [active])

  return (
    <div ref={topbar} className='topbar'>
        <div className="topbarLeft">
          <Link className='logoContainer' to='/'>
            <h1 className="logo">travo</h1>
          </Link>
        </div>
        <div className="topbarRight">
          <ul className="topbarList">
            {
              topbarItems.map((item) => (
                <ListItem key={item.id} item={item}/>
              ))
            }
          </ul>
          <SecondaryButton text={"get started"}/>
        </div>
        <Hamburger active={active} setActive={setActive}/>
    </div>
  )
}

export default Topbar