//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Header from './components/Header/Header'

import SearchBar from './components/SearchBar/SearchBar'
// import VideoResults from './components/VideoResults/VideoResults'

import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          search: '',
          comments: []
      };
  };


  render() {
      return(
              <>
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <Header />
                        </div>

                        <div class="col-6">
                            <SearchBar handleFormSubmit={this.handleSubmit} />
                        </div>
                        <div class="col-4"></div>
                    </div>
                </div>
                <hr/>
                
                
                <Footer />
            </>
         

      )
  };

}

export default App;
