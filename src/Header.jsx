import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import logo from './youtube-logo.svg';
import { Link } from 'react-router-dom';

function toggleSidebar() {
    const content = document.querySelector('.app__content');
    content.classList.toggle('active');
}

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <nav className="header">
            <div className="header__left">
                <button type="button" className="btn" onClick={toggleSidebar}>
                    <MenuIcon />
                </button>
                <Link to="/">
                    <img src={logo} alt="youtube" className="header__logo" />
                </Link>
            </div>
            <form className="header__center" method="post">
                <input type="text" placeholder="Search" class="form__input" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`} className="btn header__search">
                    <SearchIcon className="header__search" />
                </Link>
            </form>
            <div className="header__right">
                <button type="button" className="btn"><VideoCallIcon /></button>
                <button type="button" className="btn"><AppsIcon /></button>
                <button type="button" className="btn"><NotificationsIcon /></button>
                <button type="button" className="btn btn__round"><PersonIcon /></button>
            </div>
        </nav>
    )
}

export default Header
