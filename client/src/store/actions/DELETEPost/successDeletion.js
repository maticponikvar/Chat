const successDeletion = (id, getState) => {
    //console.log(getState, "GETETETETSTATATA")
    return {
      type : "DELETION_SUCCESS",
      status: "successfulDeletion",
      id
      }
  }
  
  export default successDeletion
  