const initState = {
    loggedin: false,
    ownUsername:"",
    // status:""
  }
  
  const authReducer = (state = initState, action) => {
    //console.log(action, "6")
    switch(action.type) {
      case 'LOGGEDIN':
        return {
          ...state,
          loggedin: true
        }
  
      case 'LOGGEDOUT':
        console.log('signout success');
        return {
          ...state,
          loggedin: false
        }

        case 'LOGIN_SUCCESS':
        console.log(action);
        return {
          ...state,
        }
 
      default:
        return state
    }
  }
  
export default authReducer;