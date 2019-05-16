import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"

 class SignOut extends Component {

  componentDidMount() {
    //   console.log(this.props, "props")
    //   const {cookie} = document
    //   console.log(cookie)
    //   function eraseCookie(name) {
    //     createCookie(name,"",-1);
    // }
    //   window.addEventListener(
    //     "beforeunload",
    //     console.log(document),
    //     cookie.remove("token")
    // );
      // console.log(e, h)
      
      // e.preventDefault()
      axios.get("http://localhost:3001/auth/signOut", {withCredentials: true})
          .then((res) => {
              console.log(res, "bodyyyy")
              console.log(this.props)
              
              // const posts = res.data.posts
              // const username = res.data.username
              // this.setState({redirect: true})
              this.props.loggedIn()
              localStorage.removeItem("persist:root")
              this.props.history.push("/signin")
              
              // console.log(res)
              // dispatch(successPosts(posts, username)
              
          })
          .catch((err)=>{
            console.log(err)
              // dispatch(errorPosts(err))
          })
           
  }
  

  render() {
    return (
      <div>
        <h2>Logging out...</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn : () => {dispatch({type:"LOGGEDOUT"})}
  }
}

export default connect (null, mapDispatchToProps)(SignOut)