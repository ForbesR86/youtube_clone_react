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
                <br/>
            <div className="input-group mb-3">
                
                <input name="comment" onChange={this.handleChange} value={this.state.comment} type="text" className="form-control" placeholder="Add a comment" aria-describedby="button-addon2"/>
                <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2">
              Add
            </button>
                </div>
            </form>
            
         );
    }
}
 
export default CommentForm;