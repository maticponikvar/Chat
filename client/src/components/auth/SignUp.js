// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { signUp } from '../../store/actions/AUTH/authActions'

// class SignUp extends Component {
//   // componentDidUpdate() {
//   //   console.log(this.props.auth)
//   //   const { auth } = this.props;
//   //    if (auth.status === "successsignup")  return <Redirect to='/' /> 
//   // }

//   state = {
//     email: '',
//     password: '',
//     userName: '',
//     passwordConf: '',
//   }
//   // handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.signUp(this.state);
//   }
//   render() {
//     console.log(this.props)
//     const { auth } = this.props;
//     if (auth.uid)  return <Redirect to='/' /> 
     
//     console.log(this.props, "Proooopsi")
//     return (
//       <div className="container">
//         <form className="white" onSubmit={this.handleSubmit}>
//           <h5 className="grey-text text-darken-3">Sign Up</h5>
//           <div className="input-field">
//             <label htmlFor="email">Email</label>
//              <input type="email" id='email' onChange={this.handleChange} /> 
//           </div>
//           <div className="input-field">
//             <label htmlFor="userName">First Name</label>
//             <input type="text" id='userName' onChange={this.handleChange} /> 
//           </div>
//           <div className="input-field">
//             <label htmlFor="password">Password</label>
//             <input type="password" id='password' onChange={this.handleChange} /> 
//           </div>
//           <div className="input-field">
//             <label htmlFor="passwordConf">Password</label>
//             <input type="password" id='passwordConf' onChange={this.handleChange} /> 
//           {/* </div>
//           <div className="input-field">
//             <label htmlFor="userName">First Name</label>
//             <input type="text" id='userName' onChange={this.handleChange} /> 
//           </div>
//           <div className="input-field">
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id='lastName' onChange={this.handleChange} /> 
//           </div>
//           <div className="input-field"> */}
//             <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
//             <div className="center red-text">
//               {/* { authError ? <p>{authError}</p> : null } */}
//             </div>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         auth: state.auth
//     }
// }

// const mapDispatchToProps = (dispatch)=> {
//     return {
//       signUp: (creds) => dispatch(signUp(creds))
//     }
//   }

// default connect (mapStateToProps, mapDispatchToProps)(SignUp)