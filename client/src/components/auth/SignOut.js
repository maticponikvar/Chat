import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"

class SignOut extends Component {

  componentDidMount() {

    axios.get("/api/auth/signOut", { withCredentials: true })
      .then((res) => {
        console.log(res, "bodyyyy")
        console.log(this.props)

        this.props.loggedIn()
        localStorage.removeItem("persist:root")
        this.props.history.push("/signin")
      })
      .catch((err) => {
        console.log(err)
      })

  }


  render() {
    return (
      <div>
        <h2 className="center-align">Logging out...</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: () => { dispatch({ type: "LOGGEDOUT" }) }
  }
}

export default connect(null, mapDispatchToProps)(SignOut)