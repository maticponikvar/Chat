const signUpError = (err) => {
    return{
        type: 'SIGNUP_ERROR',
        status: "error",
        err
    }
}

export default signUpError