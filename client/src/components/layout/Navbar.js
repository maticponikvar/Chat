import React, { Component } from 'react'
// import { NavLink } from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import { connect } from "react-redux"



class Navbar extends Component {


  render() {
    //console.log(this.props)
    return (
      <nav className="nav-wrapper left-align blue darken-4">
        <div className="cointainer">
        <a href="#" class="brand-logo left">Chat Room</a>
          <ul className="right">
            {!this.props.loggedin ? <SignedOutLinks /> : < SignedInLinks />}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state.auth)
  return {
    loggedin: state.auth.loggedin,
  }
}

export default connect(mapStateToProps)(Navbar)
