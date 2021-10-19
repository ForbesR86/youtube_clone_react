import React, { Component } from 'react';

class ReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: '',
            commentID: this.props.commentID,
            
         }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewReply(this.state)
    }


    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Reply:</label>
                <input name="reply" onChange={this.handleChange} value={this.state.reply} />
                <button type="submit">Submit Reply</button>
            </form>
         );
    }
}
 
export default ReplyForm;