import React, {Component} from "react";
import logotrans from '../../logotrans.png'

class SearchBar extends Component {
    state = {
        search: ''
    };
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.search);
    }

    render() {
        return (

                <>
                
                <form onSubmit={this.handleSubmit}>
                <img src={logotrans} alt="Clone Tube" width="10%" height="10%" />
                <label htmlFor="videosearch">YouTube Video Search</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.search}
                    placeholder="Search"
                    name="videosearch" />
                <button type="submit">Search</button>
            </form></>
                
        
                
                
            
        )
    }
}
export default SearchBar;