import React, { Component } from 'react';
import {Switch, Route, BrowserRouter, HashRouter} from "react-router-dom"
import './App.css';
import Navbar from "./components/layout/Navbar"
import Home from "./components/posts/Home"
import AddPost from "./components/posts/AddPost"
import Post from "./components/posts/Post"
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
// import SignUp from './components/auth/SignUp'
import Hoc from "./Hoc"


class App extends Component {
  render() {
    return (
      <HashRouter >
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Hoc(Home)}/>
          <Route path="/AddPost" component = {Hoc(AddPost)}/>
          <Route path='/signin' component={SignIn} />
          {/* <Route path='/signup' component={SignUp} /> */}
          <Route path='/signout' component={Hoc(SignOut)} />
          <Route path="/proposal/:path_id" component = {Hoc(Post)}/>
        </Switch> 
        </HashRouter>
    )
  }
}

export default App;
