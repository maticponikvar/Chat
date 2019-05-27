import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router'

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    //const {email, password} = this.state
    console.log(this.props.history)
    e.preventDefault();

          fetch("/api/auth/authenticate", {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          // var body = await res.json()
      
          //     console.log(body)
            .then((res) => {
              // console.log(res)
              // console.log(history)
              if (200) {
                console.log("resss poglej cookie", res)
                // console.log(res.text())
                return res.json();
              } else {
                const error = new Error(res.error)
                throw error;
              }
            })
            .then((ownUsername) => {
              // console.log(username)
              this.props.sendUsername(ownUsername)
              this.props.history.push("/")
            })
            .catch(err => {
              console.error(err);
              // dispatch(errorLogIn(err))
            })
            // dispatch(processedLogIn())
        }
      
          
    // console.log(this.props,"prooops")
    

  render() {

    // const { authError, auth } = this.props;
    // if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-4">Login</button>
            <div className="center red-text">
              {/* { authError ? <p>{authError}</p> : null } */}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendUsername: (ownUsername) => { dispatch({ type: "LOGIN_SUCCESS", ownUsername: ownUsername }) }
  }
}


export default connect(null, mapDispatchToProps)(SignIn)