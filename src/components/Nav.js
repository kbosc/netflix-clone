import React, { useState, useParams } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, NavLink } from 'react-router-dom';
import FormSearch from './FormSearch';
import SearchIcon from '@mui/icons-material/Search';


export default function Nav() {
    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenuBurger, setToggleMenuBurger] = useState(false)

    // console.log(window.location.pathname === "/user"); 

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav)
    });

    const handleClickBurger = () => {
        toggleMenuBurger ? setToggleMenuBurger(false) : setToggleMenuBurger(true)
    }

  return (
    <>
        <div className={`nav ${navBlack || toggleMenuBurger ? "nav--black" : ""} ${toggleMenuBurger && "show"}`}>
            <button className='nav__burger' onClick={handleClickBurger}>
            <MenuIcon />
            </button>
            <img src='./images/netflix-logo-v2.png' className='nav__logo' alt='logo de netflix'/>
            <nav className='nav__links'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav--active nav__link" : "nav__link")}>
                    Accueil
                </NavLink>
                {/* <a href='/' className='nav__link'>
                    Séries
                </a>
                <a href='/' className='nav__link'>
                    Films
                </a> */}
                <NavLink to="/user" className={(nav) => (nav.isActive ? "nav--active nav__link" : "nav__link")}>
                    Ma liste
                </NavLink>
            </nav>
            <div className='nav__actions'>
                {/* <FormSearch /> */}
                <Link to="/search">
                    {window.location.pathname === "/search" ? 
                        <form className='nav__action--form'>
                            <input type="text" placeholder='Titres, personnes, genres' id='search-input' className='nav__action--form__input'/> 
                        </form>
                        :
                        <SearchIcon /> 
                    }
                </Link>
                <a href='/' className='nav__action'>
                    DIRECT
                </a>
                <a href='/' className='nav__action'>
                    <NotificationsIcon />
                </a>
                <a href='/' className='nav__action'>
                    <img src='./images/avatar.png' className='nav__avatar' alt=''/>
                </a>
            </div>
        </div>
        {window.location.pathname === "/user"? <h2 className={`nav--user ${navBlack || toggleMenuBurger ? "nav--black" : ""} ${toggleMenuBurger && "show"}`}>Ma liste</h2> : ""}
    </>
  )
}
