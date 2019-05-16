const successCreation = (post, getState) => {
  console.log(getState, "GETETETETSTATATA")
  return {
    type : "CREATION_SUCCESS",
    status: "successfulCreation",
    post
    }
}

export default successCreation
