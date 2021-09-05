// import styles
import { Component } from 'react';
import './UploadFormInputs.scss';

class UploadFormInputs extends Component {
    state = {
        inputValue: '',
    }

    handleOnChange = event => {
        const titleStr = event.target.value;
        this.setState({
            inputValue: titleStr,
        })
    }


    render() {
        const {inputValue} = this.state;
        const inputErrorClass = inputValue.trim() ? '' : this.props.inputErrorClass;
        return(
            <div className="upload__form-inputs">
                <label className="upload__form-inputs-label" htmlFor="title">Title of your video</label>
                <input className={`upload__form-inputs-input ${inputErrorClass}`} type="text" name="title" id="title" placeholder="Add a title to your video" value={inputValue} onChange={e => this.handleOnChange(e)}/>
    
                <label className="upload__form-inputs-label" htmlFor="description">Add a video description</label>
                <textarea className="upload__form-inputs-input upload__form-inputs-input--textarea" placeholder="Add a description of your video" name="description" id="description"></textarea>
            </div>
        )
    }

}

export default UploadFormInputs;