// sass import
import './CommentSection.scss';

// component import
import Form from '../Form/Form';
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
            <div className="comments__comments">
                {commentsInfo.map(comment => {
                    return (
                        <article className="comments__comment-card" key={comment.id}>
                            <div className="comments__profile-placeholder"></div>
                            <div className="comments__ctx">
                                <div className="comments__name-date">
                                    <h3 className="comments__name">{comment.name}</h3>
                                    <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                                </div>
                                <p className="comments__paragraph">{comment.comment}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default CommentSection;