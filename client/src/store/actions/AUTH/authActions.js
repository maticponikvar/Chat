import Axios from "axios";
import signUpError from "./signUpError"
import signUpSuccess from "./signUpSuccess"
// export const signIn = (credentials) => {
//     return (dispatch, getState, {getFirebase}) => {
//       const firebase = getFirebase();
      
//       firebase.auth().signInWithEmailAndPassword(
//         credentials.email,
//         credentials.password
//       ).then(() => {
//         dispatch({ type: 'LOGIN_SUCCESS' });
//       }).catch((err) => {
//         dispatch({ type: 'LOGIN_ERROR', err });
//       });
  
//     }
//   }
  
//   export const signOut = () => {
//     return (dispatch, getState, {getFirebase}) => {
//       const firebase = getFirebase();
  
//       firebase.auth().signOut().then(() => {
//         dispatch({ type: 'SIGNOUT_SUCCESS' })
//       });
//     }
//   }
  
  export const signUp = (newUser) => {
    console.log(newUser)
    return (dispatch, getState) => {
        Axios.post("http://localhost:3001/auth/", {
            email: newUser.email,
            username: newUser.userName,
            password: newUser.password,
            passwordConf: newUser.passwordConf
        })
        .then((res) => {
          const data = res.data
          console.log(res)
            dispatch(signUpSuccess(data));
          })
        .catch((err) => {
            dispatch(signUpError(err));
        })
        //dispatch({type: "SIGNUP_PROCCESED", status:"processed"})
    }
}
  
//       firebase.auth().createUserWithEmailAndPassword(
//         newUser.email, 
//         newUser.password
//       ).then(resp => {
//         return firestore.collection('users').doc(resp.user.uid).set({
//           firstName: newUser.firstName,
//           lastName: newUser.lastName,
//           initials: newUser.firstName[0] + newUser.lastName[0]
//         });
//       }).then(() => {
//         dispatch({ type: 'SIGNUP_SUCCESS' });
//       }).catch((err) => {
//         dispatch({ type: 'SIGNUP_ERROR', err});
//       });
//     }
//   }