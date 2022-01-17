import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <NavLink activeclassname="active" to="home">BOOKS</NavLink>
    <NavLink activeclassname="active" to="categories">CATEGORIES</NavLink>
  </>
);

export default Header;
