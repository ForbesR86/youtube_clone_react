import React from 'react';

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
        <div onClick={ () => videoSelectHandler(video)} className="card" >
                <div className="card-body">
                    <h5 className="card-title">{video.id.videoId}</h5>
                        <p className="card-text"></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"></small>
                </div>
        </div> 
      );
    })}
    </div>
  )
};

export default VideoRecommended;
