import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenuBurger, setToggleMenuBurger] = useState(false)

    console.log(window.location.pathname === "/user"); 

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
                <a href='/' className='nav__link'>
                    Accueil
                </a>
                <a href='/' className='nav__link'>
                    Séries
                </a>
                <a href='/' className='nav__link'>
                    Films
                </a>
                <Link to="/user" className='nav__link'>
                    Ma liste
                </Link>
            </nav>
            <div className='nav__actions'>
                <a href='/' className='nav__action'>
                    <SearchIcon />
                </a>
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
