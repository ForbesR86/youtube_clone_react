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
                <img src={video.snippet.thumbnails.medium.url} className="card-img-top"  alt={video.snippet.description}/>
                    <h5 className="card-title">{video.snippet.title}</h5>
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
