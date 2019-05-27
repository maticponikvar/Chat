import React, { Component } from 'react';
import {Switch, Route, Router, BrowserRouter, HashRouter} from "react-router-dom"
import './App.css';
import Navbar from "./components/layout/Navbar"
import Home from "./components/posts/Home"
import AddPost from "./components/posts/AddPost"
import Post from "./components/posts/Post"
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
// import SignUp from './components/auth/SignUp'
import Hoc from "./Hoc"
// import createBrowserHistory from 'history/createBrowserHistory'

// export const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Hoc(Home)}/>
          <Route path="/AddPost" component = {Hoc(AddPost)}/>
          <Route path='/signin' component={SignIn}/>
          {/* <Route path='/signup' component={SignUp} /> */}
          <Route path='/signout' component={Hoc(SignOut)} />
          <Route path="/proposal/:path_id" component = {Hoc(Post)}/>
        </Switch> 
        </BrowserRouter>
    )
  }
}

export default App;
