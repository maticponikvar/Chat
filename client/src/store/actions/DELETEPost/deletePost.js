// import axios from "axios"
import successDeletion from "./successDeletion"
import errorDeletion from "./errorDeletion"
import processedDeletion from "./processedDeletion.js"

const deletePost = (id) => {
    //console.log(id)
    return(dispatch) =>{
        const di = {
            id: id}
        fetch("/api/posts/deletePost", 
        {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(di),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((res) => {
            dispatch(successDeletion(id))
        })
        .catch((err)=>{
            dispatch(errorDeletion(err))
        })
    dispatch(processedDeletion())
    }
}

export default deletePost