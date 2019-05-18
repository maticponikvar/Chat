const initState = {
    loggedin: false
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type) {
      case 'LOGGEDIN':
        //console.log('login success');
        return {
          ...state,
          loggedin :true
        }
  
      case 'LOGGEDOUT':
        console.log('signout success');
        return {
          ...state,
          loggedin: false
        }
  
      default:
        return state
    }
  }
  
export default authReducer;