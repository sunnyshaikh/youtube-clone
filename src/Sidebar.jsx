import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} name="Home" selected />
            <SidebarRow Icon={WhatshotIcon} name="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} name="Subscriptions" />
        </div>
    )
}

export default Sidebar
