import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <NavLink activeclassname="active" to="home">BOOKS</NavLink>
            <NavLink activeclassname="active" to="categories">CATEGORIES</NavLink>
        </>
    );
}

export default Header;