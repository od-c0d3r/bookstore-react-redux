import './Header.scss';
import { NavLink } from 'react-router-dom';
import face from '../../face.png';

const Header = () => (
  <div id="navHeader">
    <div className="flexItem">
      <span>Bookstore CMS</span>
      <NavLink activeclassname="active" to="home">BOOKS</NavLink>
      <NavLink activeclassname="active" to="categories">CATEGORIES</NavLink>
    </div>
    <div className="profileIcon">
      <img className="profileIconImg" src={face} alt="profile-icon" />
    </div>
  </div>
);

export default Header;
