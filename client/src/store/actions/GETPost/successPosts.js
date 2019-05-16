const successPosts = (posts, username) => {
        return{
            type: "POSTS_SUCCESS",
            status : "successful",
            posts,
            username
        }

}

export default successPosts
