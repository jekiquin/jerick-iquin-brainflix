// sass import
import './CommentSection.scss';

// component import
import Form from '../Form/Form';
import CommentsList from '../CommentsList/CommentsList';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function CommentSection({ commentsInfo }) {
    function countMessage() {
        let message = `${commentsInfo.length}`;
        message += commentsInfo.length > 1 ? ' Comments' : ' Comment';
        return message;
    }

    return(
        <section className="comments">
            <h2 className="comments__count">{countMessage()}</h2>
            <div className="comments__form-container">
                <ProfilePicture className='comments__form-profile-picture'/>
                <Form />
            </div>
            <CommentsList commentsInfo={commentsInfo} />
        </section>
    )
}

export default CommentSection;