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
import CommentForm from './components/Comment_Form/Comment_Form'
import VideoRecommended from './components/VideoRecommended/VideoRecommended';
import VideoDetails from './components/VideoDetails/VideoDetails'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      recommendedVideos: [],
      selectedVideo: '',
      videoID: '',
      comments: [],
      newComment: false
    };

  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("starting a component did update")
    if (prevState.videoID !== this.state.videoID) {
       axios.get('http://127.0.0.1:8000/comments/' + this.state.videoID + '/')
          .then(response => {
             this.setState({
                comments: response.data
             });
          })
          .catch(function(error) {
             console.log(error);
          })
    }
    if (this.state.newComment) {
      axios.get('http://127.0.0.1:8000/comments/' + this.state.videoID + '/')
         .then(response => {
            this.setState({
               comments: response.data,
               newComment: false
            });
         })
         .catch(function(error) {
            console.log(error);
         })
   }
 }


  async getComments() {
    console.log('getComments video ID:' + this.state.videoID)
    if (!this.state.videoID) {
      return <div>No Video selected</div>;
    }
    else{
      console.log('getting comment for new video:' + this.state.videoID)
      await axios
        .get('http://127.0.0.1:8000/comments/' + this.state.videoID + '/')
        .then(res => {
              const musiclist = res.data;
              this.setState({
                comments: musiclist
              })
        })
        .catch(function(error) {
          console.log(error);
        });
        console.log(this.state.comments)
      }
  }


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
    this.setState({
      selectedVideo: video,
      videoID: video.id.videoId
    })

}

getVideoRecommendations = (video) => {
  console.log(video);

}



createComment = (NewComment) => {
  const newCommentFormatted = {
    videoid: this.state.selectedVideo.id.videoId,
    comment: NewComment.comment,
    likes: '0',
    dislikes: '0',
  }
  axios.post('http://127.0.0.1:8000/comments/', newCommentFormatted)
        .then(res => console.log(res.data));
          this.setState({
          newComment: true
          })
          
}


  render() {
      return(
              <>
                <div class="container-fluid">
                            <SearchBar handleFormSubmit={this.handleSubmit} />
                            <VideoResults videos={this.state.videos} videoSelectHandler={this.handleVideoSelect}/>


                </div>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={8}> <VideoPlayer video={this.state.selectedVideo}/> </Col>
                        <Col sm={4}> < Comments comments_list={this.state.comments}/> </Col>
                    </Row>
                    <Row>
                        <Col sm={8}><VideoDetails video={this.state.selectedVideo}/> </Col>
                        <Col sm={4}> <CommentForm createNewComment={this.createComment}/></Col>
                    </Row>
                </Container>
                <br/>

                <div class="container-fluid">
                            
                            <VideoRecommended videos={this.state.recommendedVideos} videoSelectHandler={this.handleVideoSelect}/>


                </div>
                <Footer />
            </>
         

      )
  };

}

export default App;
