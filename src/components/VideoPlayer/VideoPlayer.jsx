import React from 'react';

const VideoPlayer = ({video}) => {
    console.log("video player selected video log")
    console.log(video)
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
                width="640" 
                height="360" 
                src={videoSrc} 
                frameborder="0">
            </iframe>

            </div></>

    )
}

export default VideoPlayer;