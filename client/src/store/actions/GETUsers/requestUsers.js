import axios from "axios"
import successUsers from "./successUsers"
import errorUsers from "./errorUsers"
import processedUsers from "./processedUsers.js"

const requestUsers = () => {
    return(dispatch) =>{
        axios.get("/auth/users", {withCredentials: true})
        .then((res) => {
            //console.log(res.dasdas, "bodyyyy")
            const usernames = res.data.usernames
            //console.log(res.data)
            dispatch(successUsers(usernames)
            )
        })
        .catch((err)=>{
            dispatch(errorUsers(err))
        })
        dispatch(processedUsers())
    }
}

export default requestUsers