import axios from "axios"
import successPosts from "./successPosts"
import errorPosts from "./errorPosts"
import processedPosts from "./porcessedPosts"

const requestPosts = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/posts", { withCredentials: true })
            .then((res) => {
                //console.log(res.dasdas, "bodyyyy")
                const posts = res.data.posts
                const username = res.data.username
                console.log(res)
                dispatch(successPosts(posts, username)
                )
            })
            .catch((err) => {
                dispatch(errorPosts(err))
            })
        dispatch(processedPosts())
    }
}

export default requestPosts