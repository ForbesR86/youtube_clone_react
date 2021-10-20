import React from 'react';


const VideoDetails = ({video}) => {
    
    if (!video) {
        return <div></div>;
    }

    return (
        <><h3>{video.snippet.title}</h3><h5>{video.snippet.description}</h5></>

    )
}
export default VideoDetails;