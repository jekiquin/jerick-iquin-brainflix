// sass import
import './CommentCard.scss'

// module import
import { dateFormatter } from '../../peripheral/dateFormatter.js';

function CommentCard({ comment }) {
    return (
        <article className="comments__comment-card">
            <div className="comments__comment-card-profilepic"></div>
            <div className="comments__comment-card-ctx">
                <div className="comments__comment-card-name-date">
                    <h3 className="comments__comment-card-name">{comment.name}</h3>
                    <p className="comments__comment-card-date">{dateFormatter(comment.timestamp)}</p>
                    {/* <p className="comments__comment-card-date">{new Date(comment.timestamp).toLocaleDateString()}</p> */}
                </div>
                <p className="comments__comment-card-paragraph">{comment.comment}</p>
            </div>
        </article>
    )
}

export default CommentCard;