import CommentCard from '../CommentCard/CommentCard';

// commentsInfo
function CommentsList({ currentVideoInfo, handleClick }) {
    const {comments, id} = currentVideoInfo;
    return (
        <div className="comments__comments">
        {comments.sort((commentA, commentB) => commentB.timestamp - commentA.timestamp).map(comment => {
            return (
                <CommentCard key={comment.id} commentObj={comment} videoId={id} handleClick={handleClick}/>
            )
        })}
    </div>
    )
}

export default CommentsList;