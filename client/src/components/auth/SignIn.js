import React, { Component } from 'react'

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
    e.preventDefault();

    // console.log(this.props,"prooops")

    fetch("/api/auth/authenticate", {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res)
        // console.log(res.body)
        if (200) {
          console.log("resss poglej cookie", res)
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      })
  }
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

export default SignIn