//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';
// import Header from './components/Header/Header'

import SearchBar from './components/SearchBar/SearchBar'
// import YouTubeAPI from './components/YouTubeAPI/YouTubeAPI'
// import VideoResults from './components/VideoResults/VideoResults'

import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          videos: [],
          comments: [],
      };
  };

  handleSubmit = async (termFromSearchBar) => {
    await axios
        .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: termFromSearchBar,
          part: "snippet",
          maxResults: 10,
          key: 'AIzaSyDdgB7l2s6hk8_RTvgn9nIM0FWcCJ8XB4o'
        }
        })
        .then(res => {
            console.log(res.data.items)
            const musiclist = res.data.items;
            this.setState({
                videos: musiclist
                })
            }
        )
        .catch(function(error) {
            console.log(error);
        });
  }



handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}


  render() {
      return(
              <>
                <div class="container-fluid">
                            <SearchBar handleFormSubmit={this.handleSubmit} />
                </div>
                <hr/>

                <table>
                {this.state.videos.map((item =>
                <tr><td key={item.id.videoId}>{item.snippet.title}</td></tr>
                ))}
</table>               
                
                <Footer />
            </>
         

      )
  };

}

export default App;
