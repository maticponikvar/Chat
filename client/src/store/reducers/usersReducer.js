const initState = {
    usernames: [],
    status: ""
}

const usersReducer = (state = initState, action) => {
      switch(action.type) {
          case "USERS_REQUEST":
          const requested = {
            ...state,
            status:action.status,
          }
          return requested
          case "USERS_SUCCESS" :
          //console.log("PostSECC", state)
          const success = {
            ...state,
            users:action.usernames
          }
          return success
          case "USERS_ERROR"  :
          const error = {
              ...state,
              status: action.status
          }
          return error
          default:
          return state
      }
  
}

export default usersReducer
