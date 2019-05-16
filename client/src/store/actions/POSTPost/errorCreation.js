const errorCreation = (e) => {
  return {
    type: "CREATION_ERROR",
    status: "errorPost",
    error: e
  }
}

export default errorCreation
