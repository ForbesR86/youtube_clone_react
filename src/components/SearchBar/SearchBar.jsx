import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
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
            
                <form onSubmit={this.handleSubmit}>
                        <label htmlFor="video-search">YouTube Video Search</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.search}
                            placeholder="Search"
                            name="videosearch" 
                        />
                        <button type="submit">Search</button>
                </form>
                
            
        )
    }
}
export default SearchBar;