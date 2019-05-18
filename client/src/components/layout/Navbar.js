import React, { Component } from 'react'
// import { NavLink } from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import { connect } from "react-redux"



class Navbar extends Component {


  render() {
    //console.log(this.props)
    return (
      <nav className="nav-wrapper left-align red darken-2">
        <div className="cointainer">
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
