import React from 'react';


const VideoDetails = ({video}) => {
    
    if (!video) {
        return <div></div>;
    }

    return (
        
        <div className="card">
            <div class="card-header">
            Channel: {video.snippet.channelTitle}
  </div>
  
  <div className="card-body">
    <h5 className="card-title">{video.snippet.title}</h5>
    <p className="card-text">{video.snippet.description}</p>
  </div>
  
</div>
        
    

    )
}
export default VideoDetails;