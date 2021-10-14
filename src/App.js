//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


// import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
// import YouTubeAPI from './components/YouTubeAPI/YouTubeAPI'
import VideoResults from './components/VideoResults/VideoResults'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Comments from './components/Comments/Comments'


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          videos: [],
          comments: [],
          selectedVideo: 'w7ejDZ8SWv8',
      };
  };

  handleSubmit = async (termFromSearchBar) => {
    await axios
        .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: termFromSearchBar,
          part: "snippet",
          maxResults: 5,
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
      console.log(this.state.selectedVideo)
      return(
              <>
                <div class="container-fluid">
                            <SearchBar handleFormSubmit={this.handleSubmit} />
                            <VideoResults videos={this.state.videos} />


                </div>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={8}> <VideoPlayer video={this.state.selectedVideo}/> </Col>
                        <Col sm={4}> < Comments /> </Col>
                    </Row>
                </Container>
                
                <Footer />
            </>
         

      )
  };

}

export default App;
