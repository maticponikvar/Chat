const errorDeletion = (e) => {
    return {
      type : "DELETION_ERROR",
      status: "error",
      error : e
    }
  }
  
  export default errorDeletion
  