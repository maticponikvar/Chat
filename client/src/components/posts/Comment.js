import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import createComment from "../../store/actions/POSTComment/createComment"
import { connect } from 'react-redux';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      id: this.props.id
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    //console.log(this.state)
  }

  handleSubmit = (e) => {
    // console.log(this.props)
    e.preventDefault()
    this.props.createComment(this.state)
    this.setState({
      comment: "",
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <TextField
                 onSubmit={this.handleSubmit}
                  name="comment"
                  onChange={this.handleChange}
                  value={this.state.comment}
                  required
                  placeholder="Write here"
                  multiline={true}
                  fullWidth={true} />
              </div>
              <div className="center">
                <button className="btn blue darken-4">Sumbit</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(Comment)