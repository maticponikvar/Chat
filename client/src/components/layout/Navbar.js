import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import { connect } from "react-redux"



class Navbar extends Component  {
  constructor(props) {
    console.log(props)
    super();
    this.state = {
      change: props.username,
    };
  }

  // const links =  (document.cookie) && this.setState(
  //   this.state
  // ) 
//   getSnapshotBeforeUpdate(preProps, preState) {
//     if(document.cookie) {
//       this.setState(
//        { username: this}
//       ) 
//         return 
//     }
//     return null;
// }
//   handleSubmit = (e, h) => {
//     console.log(this.props, "props")
//     console.log(e, h)
    
//     e.preventDefault()
//     axios.get("http://localhost:3001/auth/signOut", {withCredentials: true})
//         .then((res) => {
//             console.log(res, "bodyyyy")
//             const posts = res.data.posts
//             const username = res.data.username
//             this.setState({redirect: true})
//             // console.log(res)
//             // dispatch(successPosts(posts, username)
            
//         })
//         .catch((err)=>{
//           console.log(err)
//             // dispatch(errorPosts(err))
//         })
// }

 render() {
  //  console.log(this.state)
  
  // if (this.state.redirect === true) {
  //   return <Redirect to="/signin" />;}
  //   else 
    // console.log(this.props)
  // {
    return (
      
    
    <nav className="nav-wrapper left-align red darken-2">
            <div className="cointainer">
                {/* <Link  className="brand-logo" to= "/">Project0</Link> */}
                <ul className="right">
                  {!this.props.loggedin ? <SignedOutLinks/> : < SignedInLinks />}
                    {/* <li><NavLink to= "/">Home</NavLink></li> */}
                    {/* <li><NavLink to= "/Addpost">Add Post</NavLink></li> */}
                    {/* <li><NavLink to='/signup'>Signup</NavLink></li> */}
                    {/* <li><NavLink to='/signout'>Sign out</NavLink></li> */}
                    {/* <li><button onClick={this.handleSubmit}>Log out</button></li> */}
                    {/* <li><NavLink to='/signin'>Login</NavLink></li> */}
                </ul>
                {/* {this.state.redirect && <Redirect push to="/signin"/>} */}
            </div>
        </nav>
  )}
}

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps)
  // const id = ownProps.match.params.path_id
  console.log(state.auth)
  return {
    // post: state.postsdata.posts.find(post => post._id === id),
    // status: state.postsdata.status,
    // users: state.users.usernames,
    loggedin: state.auth.loggedin,
  }
}

export default connect (mapStateToProps)(Navbar)
