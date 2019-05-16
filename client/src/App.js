import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Navbar from "./components/layout/Navbar"
import Home from "./components/posts/Home"
import AddPost from "./components/posts/AddPost"
import Post from "./components/posts/Post"
import Comment from "./components/posts/Comment"
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import SignUp from './components/auth/SignUp'
import Chbox from './Checkbox';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createAppStore from './store';
import Loading from "./Loading"
import Hoc from "./Hoc"


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          
          <Route exact path="/" component = {Hoc(Home)}/>
          <Route path="/AddPost" component = {Hoc(AddPost)}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signout' component={Hoc(SignOut)} />
          <Route path="/proposal/:path_id" component = {Hoc(Post)}/>
        </Switch>   
        </BrowserRouter>
    )
  }
}

export default App;
