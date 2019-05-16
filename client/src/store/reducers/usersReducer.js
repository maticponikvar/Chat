const initState = {
    usernames: [],
    status: ""
}

const usersReducer = (state = initState, action) => {
  console.log(state, "state")
  console.log(action, "action")
  // if(action.comment){
  // const {id} = action.comment
  // const find = state.posts.find(post => {
  //    return (post._id === id) 
      
  //   })
  //   console.log(state.posts.indexOf(find), "find")}


      switch(action.type) {
          case "USERS_REQUEST":
          console.log("PostREQ", state)
          const requested = {
            ...state,
            status:action.status,
            //posts: action.posts
          }
          return requested
          case "USERS_SUCCESS" :
          console.log("PostSECC", state)
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
