import React, { Component } from "react";

import './SearchBar.css';

class SearchBar extends Component {
  state = {
    search: "",
  };
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.search);
  };

  render() {
    return (
      
      
      
      
      
      
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search CloneTube"
            name="videosearch"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button className="btn btn-danger" type="submit" id="button-addon1">
            Search
          </button>
        </div>
      </form>
    );
  }
}
export default SearchBar;
