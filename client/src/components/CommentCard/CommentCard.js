// sass import
import './CommentCard.scss'

// module import
import { dateFormatter } from '../../peripheral/dateFormatter.js';

// import data
import deleteIcon from '../../assets/Images/Icons/icon-delete.svg';

function CommentCard({ commentObj, videoId, handleClick }) {
    const { name, timestamp, comment, id } = commentObj;
    
    return (
        <article className="comments__comment-card">
            <div className="comments__comment-card-profilepic"></div>
            <div className="comments__comment-card-ctx">
                <div className="comments__comment-card-name-date">
                    <h3 className="comments__comment-card-name">{name}</h3>
                    <p className="comments__comment-card-date">{dateFormatter(timestamp)}</p>
                </div>
                <p className="comments__comment-card-paragraph">{comment}</p>
                <img onClick={() => {handleClick(videoId, id)}} className="comments__comment-card-delete" src={deleteIcon} alt="Delete Icon" title="Delete Comment" />
            </div>
        </article>
    )
}

export default CommentCard;