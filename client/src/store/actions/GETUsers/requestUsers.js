import axios from "axios"
import successUsers from "./successUsers"
import errorUsers from "./errorUsers"
import processedUsers from "./processedUsers.js"

const requestUsers = () => {
    return (dispatch) => {
        axios.get("/api/auth/users", { withCredentials: true })
            .then((res) => {
                const usernames = res.data.usernames
                dispatch(successUsers(usernames)
                )
            })
            .catch((err) => {
                dispatch(errorUsers(err))
            })
        dispatch(processedUsers())
    }
}

export default requestUsers