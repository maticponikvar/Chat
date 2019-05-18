const successCreation = (comment, getState) => {
    console.log(getState, "GETETETETSTATATA")
  return {
    type : "COMMENTCREATION_SUCCESS",
    status: "successful",
    comment
  }
}
  
export default successCreation
  