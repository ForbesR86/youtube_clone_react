//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
// import YouTubeAPI from './components/YouTubeAPI/YouTubeAPI'
import VideoResults from './components/VideoResults/VideoResults'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Comments from './components/Comments/Comments'
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
      replies: [],
      newComment: false
    };

  };

  // componentDidMount() {
  //   this.getComments();
  // }

  componentDidUpdate(prevProps, prevState) {
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


  // async getComments() {
  //   if (!this.state.videoID) {
  //     return <div>No Video selected</div>;
  //   }
  //   else{
  //     await axios
  //       .get('http://127.0.0.1:8000/comments/' + this.state.videoID + '/')
  //       .then(res => {
  //             const musiclist = res.data;
  //             this.setState({
  //               comments: musiclist
  //             })
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });

  //       //Get replies
  //       await axios
  //       .get('http://127.0.0.1:8000/replies/')
  //       .then(res => {
  //             const musiclist = res.data;
  //             this.setState({
  //               replies: musiclist
  //             })
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //     }
  // }


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
            const videolist = res.data.items;
            this.setState({
                videos: videolist
                })
            }
        )
        .catch(function(error) {
            console.log(error);
        });
  }



handleVideoSelect = (video) => {
    this.getVideoRecommendations(video.id.videoId);
    this.setState({
      selectedVideo: video,
      videoID: video.id.videoId
    })
}

//https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}
//https://www.googleapis.com/youtube/v3/search?relatedToVideoId=lN2AaifIp7s&type=lN2AaifIp7s&key=AIzaSyDdgB7l2s6hk8_RTvgn9nIM0FWcCJ8XB4o

getVideoRecommendations = async (video) => {

      await axios
        .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          relatedToVideoId: video,
          type: 'video',
          part: 'snippet',
          key: 'AIzaSyBeML4-6rqt-2GGTQXGBIzOfNUoRlGfnS8',
          }
        })
        .then(res => {
          this.setState({
              recommendedVideos: res.data
          }); 
          })
        .catch(function(error) {
          console.log(error);
          });

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

createReply = (NewReply) => {
  const newReplyFormatted = {
    commentid: NewReply.commentID,
    reply: NewReply.reply,
  }

  axios.post('http://127.0.0.1:8000/replies/', newReplyFormatted)
        .then(res => console.log(res.data));
          this.setState({
          newReply: true
          })
          
}

handleLike = (commentID) => {
  console.log('I liked: ' + commentID)
  axios.patch('http://127.0.0.1:8000/comments/' + commentID + '/Like');
  this.setState({
    newComment: true
    })
}

handleDislike = (commentID) => {
  console.log('I disliked: ' + commentID)
  axios.patch('http://127.0.0.1:8000/comments/' + commentID + '/Dislike');
  this.setState({
    newComment: true
    })
}


  render() {
      return(
              <container>
                <Container>
                <Row>
                  <Col>
                    <br/>
                  </Col>
                </Row>
                
                
                
                <Row>
                  <Col></Col>
                  <Col><Header/></Col>
                  <Col></Col>
                  
                </Row>
                <Row>
                  <Col>
                    <br/>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                    <Col sm={8}><SearchBar handleFormSubmit={this.handleSubmit} /></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <VideoResults videos={this.state.videos} videoSelectHandler={this.handleVideoSelect}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <br/>
                  </Col>
                </Row>
                <Row>
                        <Col sm={8}> 
                        <VideoPlayer video={this.state.selectedVideo}/> 
                        <VideoDetails video={this.state.selectedVideo}/>
                        <VideoRecommended videos={this.state.recommendedVideos.items} videoSelectHandler={this.handleVideoSelect}/>
                        </Col>
                        <Col sm={4}> 
                          
                            
                            <Comments video={this.state.selectedVideo} comments_list={this.state.comments} replies={this.replies} likeComment={this.handleLike} dislikeComment={this.handleDislike} createNewReply={this.createReply} createNewComment={this.createComment}/> 
                           
                        </Col>

                    </Row>
                    
                
               
                <Row>
                  <Col>
                    <Footer/>
                  </Col>
                </Row>
                </Container>
                </container>
         

      )
  };

}

export default App;
