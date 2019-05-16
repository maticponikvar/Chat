const successUsers = (usernames) => {
    console.log(usernames)
    return{
        type: "USERS_SUCCESS",
        status : "successful",
        usernames
    }

}

export default successUsers
