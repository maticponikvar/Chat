const errorCommentCreation = (e) => {
    return {
      type : "CREATION_ERROR",
      status: "error",
      error : e
    }
  }
  
  export default errorCommentCreation
  