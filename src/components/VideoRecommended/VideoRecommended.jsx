import React from 'react';

const VideoRecommended = ({videos , videoSelectHandler}) => {
  if (!videos) {
    return <div>No Video</div>;
  }

  return (
    <div className="card-group">
    {videos.map((video) => {
      return (
        <div onClick={ () => videoSelectHandler(video)} className="card" >
                <div className="card-body">
                    <h5 className="card-title">{video.items.id.videoID}</h5>
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
