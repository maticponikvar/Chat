//import axios from "axios";
import processedCommentCreation from "./processedCommentCreation"
import successCommentCreation from "./successCommentCreation"
import errorCommentCreation from "./errorCommentCreation"

const createComment = (comment) => {
  return (dispatch, getState) => {
    const data = {
      comment: comment,
      id: comment.id
    }
    fetch("/api/posts/submitComment",
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        dispatch(successCommentCreation(comment))
      })
      .catch((e) => {
        dispatch(errorCommentCreation(e))
      })
    dispatch(processedCommentCreation())
  }
}

export default createComment
