//import axios from "axios";
import processedCommentCreation from "./processedCommentCreation"
import successCommentCreation from "./successCommentCreation"
import errorCommentCreation from "./errorCommentCreation"

const createComment = (comment) => {
  console.log(comment)
  return (dispatch, getState) => {
    console.log(getState, "getstate")
    const data = {
      comment: comment,
      id: comment.id
    }
    console.log(data, "DARA")
    fetch("/posts/submitComment",
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        //console.log(getState, "JDSDSAJKDHASHD")
        dispatch(successCommentCreation(comment))
      })
      .catch((e) => {
        //console.log(e)
        dispatch(errorCommentCreation(e))
      })
    dispatch(processedCommentCreation())
    //dispatch(processedCreation())
  }
}

export default createComment
