//import axios from "axios";
import processedCreation from "./processedCreation"
import successCreation from "./successCreation"
import errorCreation from "./errorCreation"

const createPost = (post) => {
  console.log(post, "post lin 7")
  return (dispatch, getState) => {
    const data = {
      title: post.title,
      content: post.content,
      // author: post.author,
      permissions: post.selected
    }

    fetch("http://localhost:3001/posts/submitPost",
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      // Axios( "http://localhost:3001/posts/submitPost", {
      //   method: "post",
      //   withCredentials: true,
      //     title: post.title,
      //     content: post.content,
      //     author: post.author
      // })
      .then((res) => {
        console.log(getState, "JDSDSAJKDHASHD")
        dispatch(successCreation(post, getState))
      })
      .catch((e) => {
        console.log(e)
        dispatch(errorCreation(e))
      })
    dispatch(processedCreation())
    //dispatch(processedCreation())
  }
}

export default createPost
