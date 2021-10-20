import React from 'react';

const VideoPlayer = ({video}) => {
    if (!video) {
        return <div></div>;
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
                frameborder="0">
            </iframe>

            </div></>

    )
}

export default VideoPlayer;