import React from 'react';

const Video = ({video , videoSelectHandler}) => {
    return (
        <div onClick={ () => videoSelectHandler(video)} className="card" >
            <img src={video.snippet.thumbnails.medium.url} className="card-img-top"  alt={video.snippet.description}/>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                        <p className="card-text">{video.snippet.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Channel: {video.snippet.channelTitle}</small>
                </div>
        </div>
    )
};

export default Video;