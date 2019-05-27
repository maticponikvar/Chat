import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import requestPosts from "../../store/actions/GETPost/requestPosts"
import requestUsers from "../../store/actions/GETUsers/requestUsers"

class Home extends Component {

  componentWillMount() {
    this.props.requestPosts()
    this.props.requestUsers()
  }

  render() {
    this.props.loggedIn()
    // console.log(this.props)
    const { postsdata, status } = this.props
    console.log(this.props)

    const postsList = postsdata.slice(0).reverse().map((post) => {
      console.log(this.props)
      let date = new Date(post.date)
      date = date.toDateString()
      
      return (
        <div className="post card" key={post._id} >
          <div className="card-content">
            <Link to={"/proposal/" + post._id} className="black-text" ><span className="card-title blue-text">{post.title}</span> </Link>
            <span className="card-body">{post.content}</span>
            <br />
            <br />
            <p className="right-align">
              <span style={{ possition: "relative", float: "left" }}>
                <i className="material-icons">comment</i>
                {!post.comments ? "0" : post.comments.length}</span>
              <span className="card-body">Posted by {post.author} </span>
              <span className="card-footer">on {date} </span>
            </p>
          </div>
        </div>
      )
    }
    )

    console.log(status)
    return (
      <div className="container">
        {status === "pending" ? <h2 className="center-align">Loading...</h2> : (postsList.length === 0 ? <h2 className="center-align">No posts yet</h2> : postsList)}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    requestPosts: () => dispatch(requestPosts()),
    requestUsers: () => dispatch(requestUsers()),
    loggedIn: () => { dispatch({ type: "LOGGEDIN", loggedin: true }) }
  }
}


const mapStateToProps = (state) => {
  //console.log(state.auth, "STATEAUTH")
  // console.log(state, "state")
  return {
    loggedin: state.auth.loggedin,
    postsdata: state.postsdata.posts,
    users: state.users.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)