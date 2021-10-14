//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          search: 0,
          comments: []
      };
  };


  render() {
      return(
          <div className="container-fluid">
          < Header />

          < Footer />
         
          
          </div>
      )
  };

}

export default App;
