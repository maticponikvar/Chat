import React, { Component } from 'react'
import { connect } from "react-redux"
import Comment from "./Comment"
import deletePost from "../../store/actions/DELETEPost/deletePost"

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
    const { post } = this.props
    const comments = post.comments.map((comment) => {
      let date = new Date(post.date)
      date = date.toDateString()
      //console.log(comment)
      return (
        <div className="post card" key={comment._id}>
          <div className="card-content">
            <span className="card-body"  >{comment.comment}</span>
            <br />
            <br />
            <div className="right-align">
              <span className="card-footer" style={{ float: "left" }}>
                Posted by {post.author} on {date}
              </span>
              <span className="card-footer">
                <i className="material-icons">thumb_up</i>
              </span>
            </div>
          </div>
        </div>
      )
    })

    const id = this.props.match.params.path_id
    const { author } = this.props.post
    const { username } = this.props

    let date = new Date(post.date)
    date = date.toDateString()

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
                Posted by {post.author} on {date}
              </span>
              <span className="card-footer">
                {author === username && <button onClick={this.handleDelete} className="btn card-footer blue darken-4" >Delete</button>}
              </span>
            </div>
          </div>
        </div>


        <div>{comments}</div>


        < Comment id={id} />

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
    username: state.postsdata.username,
  }
}

export default connect(mapStateToProps)(Post)
