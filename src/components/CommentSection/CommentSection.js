import ProfilePicture from '../ProfilePicture/ProfilePicture';
import PageButton from '../PageButton/PageButton';

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
                <form className="comments__form">
                    <div className="comments__form-input-container">
                        <label htmlFor="comment" className="comments__form-label">Join the Converstaion</label>
                        <textarea className="comments__form-input" name="comment" id="comment" placeholder="Please enter comment"></textarea>
                    </div>
                    <PageButton submit={true} className='comments__form-submit' value='COMMENT' />
                </form>
            </div>
        </section>
    )
}

export default CommentSection;