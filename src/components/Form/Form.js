// sass import
import './Form.scss';

// image imports
import PageButton from '../PageButton/PageButton';


function Form() {
    return (
        <form className="comments__form">
            <div className="comments__form-input-container">
                <label htmlFor="comment" className="comments__form-label">Join the Conversation</label>
                <textarea className="comments__form-input" name="comment" id="comment" placeholder="Please enter comment" maxLength="250"></textarea>
            </div>
            <PageButton submit={true} className='comments__form-submit' value='COMMENT' />
        </form>
    )
}

export default Form;