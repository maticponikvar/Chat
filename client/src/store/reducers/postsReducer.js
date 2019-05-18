const initState = {
    posts: [],
    status: ""
}

const postsReducer = (state = initState, action) => {
  //console.log(state, "state")
  //console.log(action, "action")

      switch(action.type) {
          case "POSTS_REQUEST":
          const requested = {
            ...state,
            status:action.status,
          }
          return requested

          case "CREATION_REQUEST":
          const creationRequested = {
            ...state,
            status:action.status,
          }
          return creationRequested

          case "DELETION_REQUEST":
          const deletionRequested = {
            ...state,
            status:action.status,
          }
          return deletionRequested

          case "POSTS_SUCCESS" :
          const success = {
            ...state,
            status: action.status,
            posts: action.posts,
            username: action.username,
          }
          return success

          case "CREATION_SUCCESS":
          const creationSucc = {
              ...state,
              posts: [...state.posts, action.post],
              status: action.status          
            }
          return creationSucc

          case "DELETION_SUCCESS" :
          const deletionSuccess = {
            ...state,
            status: action.status,
            posts: state.posts.filter(({ id }) => id !== action.data),
          }
          return deletionSuccess

          case "POSTS_ERROR":
          const error = {
              ...state,
              status: action.status
          }
          return error

          case "CREATION_ERROR"  :
          const creationError = {
              ...state,
              status: action.status
          }
          return creationError 
          
          case "DELETION_ERROR":
          const deletionError = {
              ...state,
              status: action.status
          }
          return deletionError

          case "COMMENTCREATION_SUCCESS":
          const {id} = action.comment
          const find = state.posts.find(post => {
            return (post._id === id) 
           })
          const index = state.posts.indexOf(find)
          const creationCommentSucc = {
            ...state,
            posts: [
              ...state.posts.slice(0, index),
              {
                ...state.posts[index],
                comments : [ ...state.posts[index].comments,
                action.comment]
              },
              ...state.posts.slice(index)
            ]     
          }
          return creationCommentSucc

          default:
          return state
      }
  
}

export default postsReducer
