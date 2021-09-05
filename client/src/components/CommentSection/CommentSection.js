// sass import
import './CommentSection.scss';

// component import
import CommentForm from '../CommentForm/CommentForm';
import CommentsList from '../CommentsList/CommentsList';
import ProfilePicture from '../ProfilePicture/ProfilePicture';


function CommentSection({ currentVideoInfo, handleSubmitComment, handleClick }) {
    const { comments, id } = currentVideoInfo;
    function countMessage() {
        let message = `${comments.length}`;
        message += comments.length > 1 ? ' Comments' : ' Comment';
        return message;
    }

    return(
        <section className="comments">
            <h2 className="comments__count">{countMessage()}</h2>
            <div className="comments__form-container">
                <ProfilePicture className="comments__form-profile-picture"/>
                <CommentForm videoId={id} handleSubmitComment={handleSubmitComment}/>
            </div>
            <CommentsList currentVideoInfo={currentVideoInfo} handleClick={handleClick} />
        </section>
    )
}

export default CommentSection;