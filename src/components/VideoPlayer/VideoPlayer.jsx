import React from 'react';

const VideoPlayer = ({video}) => {
    if (!video) {
        return <div>No Video Selected</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <><div>
            <iframe
                title='CloneTube' 
                id="ytplayer" 
                type="text/html" 
                width="853" 
                height="505" 
                src={videoSrc} 
                frameBorder="2">
            </iframe>

            </div></>

    )
}

export default VideoPlayer;