import React from 'react';
import Video from '../Video/Video';

const VideoRecommended = ({videos , videoSelectHandler}) => {
  console.log(videos)
  if (!videos) {
    return <div>No Video</div>;
  }
  console.log(videos[1].id.videoId)
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
