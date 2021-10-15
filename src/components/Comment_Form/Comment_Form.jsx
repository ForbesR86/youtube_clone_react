import React, { Component } from 'react';
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
         }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewComment(this.state)
    }


    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Comment:</label>
                <input name="comment" onChange={this.handleChange} value={this.state.comment} />
                <button type="submit">Submit Comment</button>
            </form>
         );
    }
}
 
export default CommentForm;