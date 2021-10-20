import React from 'react';
import Video from '../Video/Video';


const VideoRecommended = ({videos , videoSelectHandler}) => {
    
  
  
  
  return (
    <div className="card-group">
      
    {videos.map((video) => {
      return (
        <Video video={video} videoSelectHandler={videoSelectHandler} key={video.id.videoId}/> 
      );
    })}
    </div>
  )
};

export default VideoRecommended;
