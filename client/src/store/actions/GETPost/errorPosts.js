const errorPosts = (err) =>{
    return {
        type: "POSTS_ERROR",
        status: "error",
        error: err}
}

export default errorPosts
