const errorUsers = (err) =>{
    return {
        type: "USERS_ERROR",
        status: "error",
        error: err}
}

export default errorUsers
