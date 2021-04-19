import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';


function VideoCard({ image, title, channel, view, timestamp, channelImage }) {
    return (
        <div className="video__card">
            <img src={image} alt="thumbnail" className="thumbnail" />
            <div className="videocard__info">
                <Avatar className="video__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {view} + {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
