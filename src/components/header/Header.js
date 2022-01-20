import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div id="navHeader">
    <NavLink activeclassname="active" to="home">BOOKS</NavLink>
    <NavLink activeclassname="active" to="categories">CATEGORIES</NavLink>
  </div>
);

export default Header;
