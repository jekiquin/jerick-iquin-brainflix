import CommentCard from '../CommentCard/CommentCard';

function CommentsList({ commentsInfo }) {
    return (
        <div className="comments__comments">
        {commentsInfo.map(comment => {
            return (
                <CommentCard key={comment.id} comment={comment} />
            )
        })}
    </div>
    )
}

export default CommentsList;