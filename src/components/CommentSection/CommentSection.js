// sass import
import './CommentSection.scss';

// component import
import CommentForm from '../CommentForm/CommentForm';
import CommentsList from '../CommentsList/CommentsList';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function CommentSection({ commentsInfo, videoId }) {
    function countMessage() {
        let message = `${commentsInfo.length}`;
        message += commentsInfo.length > 1 ? ' Comments' : ' Comment';
        return message;
    }

    return(
        <section className="comments">
            <h2 className="comments__count">{countMessage()}</h2>
            <div className="comments__form-container">
                <ProfilePicture className="comments__form-profile-picture"/>
                <CommentForm videoId={videoId}/>
            </div>
            <CommentsList commentsInfo={commentsInfo} />
        </section>
    )
}

export default CommentSection;