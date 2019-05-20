// import axios from "axios"
import successDeletion from "./successDeletion"
import errorDeletion from "./errorDeletion"
import processedDeletion from "./processedDeletion.js"

const deletePost = (id) => {
    //console.log(id)
    return(dispatch) =>{
        //console.log(id)
        const di = {
            id: id}
        fetch("/api/posts/deletePost", 
        {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(di),
        headers: {
          'Content-Type': 'application/json',
        //   method: 'DELETE'
        }
      })
        // axios.delete("http://localhost:3001/posts/deletePost", {withCredentials: true})
        .then((res) => {
            // console.log(res, "resss")
            //const post = res.data.posts
            // console.log(id)
            //console.log(res)
            dispatch(successDeletion(id))
        })
        .catch((err)=>{
            dispatch(errorDeletion(err))
        })
    dispatch(processedDeletion())
    }
}

export default deletePost