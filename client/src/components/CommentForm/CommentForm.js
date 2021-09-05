// sass import
import './CommentForm.scss';
import {Component} from 'react';

// image imports
import PageButton from '../PageButton/PageButton';


class CommentForm extends Component {
    state = {
        inputErrorClass: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const {handleSubmitComment, videoId} = this.props;
        const commentInput = event.target.comment;
        if (commentInput.value.trim() === '') {
            this.setState({
                inputErrorClass: 'comments__form-input--error'
            })
            return
        }
        handleSubmitComment(videoId, commentInput)
            .then(() => {
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const {inputErrorClass} = this.state
        return (
            <form className="comments__form" onSubmit={e => this.handleSubmit(e)}>
                <div className="comments__form-input-container">
                    <label htmlFor="comment" className="comments__form-label">Join the Conversation</label>
                    <textarea className={`comments__form-input ${inputErrorClass}`} name="comment" id="comment" placeholder="Please enter comment" maxLength="250"></textarea>
                </div>
                <PageButton submit={true} className='comments__form-submit' value='COMMENT' />
            </form>
        )
    }
}

export default CommentForm;