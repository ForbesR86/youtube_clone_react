//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';
// import Header from './components/Header/Header'

import SearchBar from './components/SearchBar/SearchBar'
// import YouTubeAPI from './components/YouTubeAPI/YouTubeAPI'
import VideoResults from './components/VideoResults/VideoResults'

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
          maxResults: 5,
          key: 'AIzaSyBeML4-6rqt-2GGTQXGBIzOfNUoRlGfnS8'
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
                            <VideoResults videos={this.state.videos} />

                </div>
                <hr/>
 
                
                <Footer />
            </>
         

      )
  };

}

export default App;
