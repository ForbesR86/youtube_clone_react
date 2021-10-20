import React, { Component } from "react";

class ReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      commentID: this.props.commentID,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewReply(this.state);
  };

  render() {
    return (
      
    <li className="list-group list-group-flush">

        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              name="reply"
              type="text"
              className="form-control"
              placeholder="Add a reply"
              aria-describedby="button-addon2"
              onChange={this.handleChange}
              value={this.state.reply}
            />

            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </form>
      </li>
    );
  }
}

export default ReplyForm;
