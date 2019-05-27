import React, { Component } from 'react'
import { connect } from "react-redux"
import Comment from "./Comment"
import deletePost from "../../store/actions/DELETEPost/deletePost"
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      post: this.props.post
    }
  }

  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    //console.log(this.state)
  }

  handleSubmit = (e) => {
    //console.log(this.props)
    e.preventDefault()
    this.props.createComment(this.state)
  }

  handleDelete = (e) => {
    this.props.dispatch(deletePost(this.props.match.params.path_id))
    this.props.history.push("/")
  }

  render() {
    // console.log(this.props, "props v post")
    const { post, username } = this.props
    const { author } = this.props.post
    const id = this.props.match.params.path_id
    //console.log(this.props)
    
    const comments = post.comments.map((comment) => {
      comment.date = new Date(comment.date)
      comment.date = comment.date.toDateString()
      let d = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      // console.log(d)
      return (
        <div className="post card" key={comment._id}>
          <div className="card-content">
            <span className="card-body"  >{comment.comment}</span>
            <br />
            <br />
            <div className="right-align">
              <span className="card-footer" style={{ float: "left" }}>
                Posted by {!comment.author ? username : comment.author} on {!comment.date ? d : comment.date}
              </span>
              <span className="card-footer">
                <i className="material-icons">thumb_up</i>
              </span>
            </div>
          </div>
        </div>
      )
    })

    let permit = post.permissions.toString()
    permit = <p style={{ fontSize: 13 }}>{permit.replace(/,/g, ', ')}</p>
    // console.log(permit)
    post.date = new Date(post.date)
    post.date = post.date.toDateString()
    
    return (
      
      
      <div className="container">
        <div className="post card" key={post._id} >
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <span className="card-body"  >{post.content}</span>

            <br />
            <br />
            <div className="right-align">
              <span className="card-footer" style={{ float: "left" }}>
                Posted by {post.author} on {post.date}
              </span>
              <span className="card-footer" >
                {author === username 
                ? 
                <React.Fragment>
                <Button onClick={this.handleDelete} className="btn card-footer blue darken-4 z-depth-0 white-text" style={{ marginRight: "15px" }}>Delete</Button>

                <Tooltip title={permit} >
                  <Button className="btn card-footer blue darken-4 z-depth-0 white-text">Visible to</Button>
                </Tooltip>
                </React.Fragment>
                :  
                <Tooltip title={permit} >
                  <Button className="btn card-footer blue darken-4 z-depth-0 white-text">Visible to</Button>
                </Tooltip>}
              </span>
            </div>
          </div>
        </div>
        <div>{comments}</div>
        < Comment id={id} ownUsername={this.props.ownUsername}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.path_id
  return {
    post: state.postsdata.posts.find(post => post._id === id),
    status: state.postsdata.status,
    users: state.users.usernames,
    username: state.postsdata.username
  }
}

export default connect(mapStateToProps)(Post)
