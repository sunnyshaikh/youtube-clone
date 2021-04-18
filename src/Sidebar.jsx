import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} name="Home" selected />
            <SidebarRow Icon={WhatshotIcon} name="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} name="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} name="Library" />
            <SidebarRow Icon={HistoryIcon} name="History" />
            <SidebarRow Icon={PlayCircleFilledIcon} name="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} name="Watch later" />
            <SidebarRow Icon={ThumbUpIcon} name="Liked videos" />
            <SidebarRow Icon={KeyboardArrowDownIcon} name="Show more" />
        </div>
    )
}

export default Sidebar
