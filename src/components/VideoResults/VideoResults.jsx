import React, { Component } from "react";

class VideoResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  render() {
    return (
      <div>
          
        {this.props.videos.map((item) => {
          return (
            <div>
                    <h5 >{item.snippet.title}</h5>
                    <p >{item.id.videoId}</p>
                     <a href="https://www.youtube.com/watch?v={item.id.videoId}">View video</a>
             </div>

          );
        })}
        <button>More Videos</button>
        
      </div>
    );
  }
}

export default VideoResults;
