import React, { Component } from 'react'
import { connect } from "react-redux"
import{Link} from "react-router-dom"
import requestPosts from "../../store/actions/GETPost/requestPosts"
import requestUsers from "../../store/actions/GETUsers/requestUsers"

import AddPost from "./AddPost"
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Hoc from "../../Hoc"


class Home extends Component {

    componentWillMount() {
      //console.log(this.props, "complete props" )
    

      // axios.get("http://localhost:3001/posts", {withCredentials: true})
      //   .then((res) => {
      //       //console.log(res.dasdas, "bodyyyy")
      //       const posts = res.data.posts
      //       console.log(res)
            
      //   })
      
         this.props.requestPosts()
         this.props.requestUsers()
         
       //return <Redirect to='/signup' /> 
        //console.log(this.props)
        //this.props.subscribe(this.forceUpdate.bind(this));
        // this.props.dispatch(requestPosts())
    }


    

    // componentDidUpdate() {
    //   this.props.dispatch(requestPosts())
    // //   const { auth } = this.props;
    //   if (!auth.uid) this.props.history.push("/signup")
    //   else if (this.props.auth.uid){
    //       console.log('ok');
    //       this.props.history.push('/')
    //           }
           //}
        
        

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.postsdata !== this.props.postsdata) {
    //         // Do whatever you want
    //         console.log("hereee we go")
    //     }
    // }

  render() {       
    //const load = (status === "pending" || !this.props.postsdata) ? <div><h1>Loading...</h1></div> : postsList
    //
  //    while(!this.props.postsdata && thu) {
    console.log(this.props)
  // }
    // console.log(localStorage, "USERNAME")
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/signup' /> 

    const {postsdata, status, username} = this.props
    
    // console.log(this.props, "USERNAME")
    //console.log(posts)

    // const collapse = (e) => {
    //   //console.log(e)
    //   //$('.collapsible').collapsible();
    //   //var elems = document.querySelectorAll('.collapsible');
    //   //var instances = M.Collapsible.init(elems, options);
    // }

    const postsList = postsdata.slice(0).reverse().map((post) => {
      this.props.loggedIn()
      //console.log(post.comments.length)
       //console.log(this.props, "PROPS")
       let date = new Date (post.date)
       date = date.toDateString()
       console.log(date)
                //let date = post.date.slice(0, 16) 
                // date = date.replace(/-/g, ".")
                // date = date.replace( "T", " at ") 
                return(
                
                <div className="post card" key = {post._id} >
                    <div className="card-content">
                    <Link to = {"/proposal/" + post._id} className="black-text" ><span className="card-title blue-text">{post.title}</span> </Link>
                    <span className="card-body">{post.content}</span>
                    <br />
                    <br />
                    <p className="right-align">
                    <span style={{possition: "relative", float: "left"}}>
                    <i className="material-icons">comment</i>
                    {!post.comments ? "0" :post.comments.length}</span>
                    <span className="card-body">Posted by {post.author} </span>
                    <span className="card-footer">on {date} </span>
                    </p>
                    </div>
                </div>
                )}
            )

    return (
      <div className="container">
        {status === "pending" ? <p>loading</p> : postsList}
      </div>
    )
  }
}


  const mapDispatchToProps = (dispatch) => {
    return {
      requestPosts: () => dispatch(requestPosts()),
      requestUsers: () => dispatch(requestUsers()),
      loggedIn : () => {dispatch({type:"LOGGEDIN", loggedin:true})}
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
  
  export default connect (mapStateToProps, mapDispatchToProps)(Home)