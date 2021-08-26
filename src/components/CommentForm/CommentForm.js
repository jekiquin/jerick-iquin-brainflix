// sass import
import './CommentForm.scss';

// image imports
import PageButton from '../PageButton/PageButton';


function CommentForm() {
    const handleSubmit = event => {
        event.preventDefault();
        const commentInput = event.target.comment;
        if (commentInput.value.trim() === '') {
            commentInput.classList.add('comments__form-input--error');
            return
        }
        commentInput.classList.remove('comments__form-input--error');

        console.log(event.target.comment.value);        //placeholder for submit handler prop
        event.target.reset();
    }

    return (
        <form className="comments__form" onSubmit={handleSubmit}>
            <div className="comments__form-input-container">
                <label htmlFor="comment" className="comments__form-label">Join the Conversation</label>
                <textarea className="comments__form-input" name="comment" id="comment" placeholder="Please enter comment" maxLength="250"></textarea>
            </div>
            <PageButton submit={true} className='comments__form-submit' value='COMMENT' />
        </form>
    )
}

export default CommentForm;