// import styles
import './UploadFormInputs.scss';

function UploadFormInputs() {
    return(
        <div className="upload__form-inputs">
            <label className="upload__form-inputs-label" htmlFor="title">Title of your video</label>
            <input className="upload__form-inputs-input" type="text" name="title" id="title" placeholder="Add a title to your video" required/>

            <label className="upload__form-inputs-label" htmlFor="description">Add a video description</label>
            <textarea className="upload__form-inputs-input upload__form-inputs-input--textarea" placeholder="Add a description of your video" name="description" id="description"></textarea>
        </div>
    )
}

export default UploadFormInputs;