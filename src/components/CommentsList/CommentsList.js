import CommentCard from '../CommentCard/CommentCard';

function CommentsList({ commentsInfo }) {
    return (
        <div className="comments__comments">
        {commentsInfo.sort((commentA, commentB) => commentB.timestamp - commentA.timestamp).map(comment => {
            return (
                <CommentCard key={comment.id} commentObj={comment} />
            )
        })}
    </div>
    )
}

export default CommentsList;