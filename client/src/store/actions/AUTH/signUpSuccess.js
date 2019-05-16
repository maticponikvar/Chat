const signUpSuccess = (data) => {
    return{
        type: 'SIGNUP_SUCCESS',
        status: data.status,
        uid: data.uid,
        email: data.email
    }
}

export default signUpSuccess
