import './Footer.scss';
import ListItem from '../ListItem/ListItem';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import facebook from '../../img/facebook-outlined.png';
import instagram from '../../img/instagram-outlined.png';
import { footerList } from '../../staticData';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerTop">
            <h2 className="footerHeader">Join the newsletter to receive latest news about vacation packages.</h2>
            <p className="footerText">**Cancel anytime.</p>
            <div className="subWrapper">
                <input type="email" placeholder='Email' />
                <SecondaryButton text={"subscribe"}/>
            </div>
        </div>
        {/* <div className="footerCenter">
            <ul className="footerList">
                {
                    footerList.map((item) => (
                        <ListItem item={item} key={item.id}/>
                    ))
                }
            </ul>
            <ul className="footerList">
                {
                    footerList.map((item) => (
                        <ListItem item={item} key={item.id}/>
                    ))
                }
            </ul>
            <ul className="footerList">
                {
                    footerList.map((item) => (
                        <ListItem item={item} key={item.id}/>
                    ))
                }
            </ul>
            <ul className="footerList">
                {
                    footerList.map((item) => (
                        <ListItem item={item} key={item.id}/>
                    ))
                }
            </ul>
        </div> */}
        <div className="footerBtm">
            <div className="footerBtmLeft">
                <span>&copy;travo </span> <p></p>
            </div>
            <div className="footerBtmRight">
                <a href="">
                    <img src={facebook} alt="" />
                </a>
                <a href="">
                    <img src={instagram} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer