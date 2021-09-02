// sass import
import './CommentCard.scss'

// module import
import { dateFormatter } from '../../peripheral/dateFormatter.js';

// import base_url form api
import {BASE_URL} from '../../peripheral/api';

function CommentCard({ commentObj, videoId, handleClick }) {
    const deleteIcon = BASE_URL + '/Icons/icon-delete.svg';
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
                
                <button onClick={() => {handleClick(videoId, id)}} className="comments__comment-card-delete"><img src={deleteIcon} alt="Delete Icon" /></button>
            </div>
        </article>
    )
}

export default CommentCard;