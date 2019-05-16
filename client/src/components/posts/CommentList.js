console.log(this.props, "props v post")
const {post}= this.props
const comments = post.comments.map((comment) => {
    return(
    <div className="post card" key = {comment.conetent} >
        <div className="card-content">
        <span className="card-title">{comment.content}</span>
        <span className="card-body">{comment.author}</span>
        <div className="right-align">

<span className="card-footer" style={{float:"left"}}>
Posted by {comment.author} on {date}
</span>
</div>
        </div>
        </div>
    )}
)