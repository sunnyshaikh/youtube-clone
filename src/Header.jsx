import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import logo from './youtube-logo.svg';

function toggleSidebar() {
    const content = document.querySelector('.app__content');
    content.classList.toggle('active');
}

const submit = (e) => {
    e.preventDefault();
    alert('Search function coming soon:)');
}

function Header() {
    return (
        <nav className="header">
            <div className="header__left">
                <button type="button" className="btn" onClick={toggleSidebar}>
                    <MenuIcon />
                </button>
                <img src={logo} alt="youtube" className="header__logo" />
            </div>
            <form className="header__center" onSubmit={submit} method="post">
                <input type="text" placeholder="Search" class="form__input" />
                <button type="submit" class="btn header__search">
                    <SearchIcon className="header__search" />
                </button>
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
