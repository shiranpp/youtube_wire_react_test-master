import React from 'react';

const VideoListItem = ({video,onVedioSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={()=>onVedioSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>

    );
};

module.exports = VideoListItem;