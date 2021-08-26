function UploadFormInputs() {
    return(
        <div className="upload__form-inputs">
            <label className="upload__form-label" htmlFor="title">Title of your video</label>
            <input className="upload__form-input" type="text" name="title" id="title" placeholder="Add a title to your video" required/>

            <label className="upload__form-label" htmlFor="description">Add a video description</label>
            <textarea className="upload__form-input upload__form-input--textarea" placeholder="Add a description of your video"></textarea>
        </div>
    )
}

export default UploadFormInputs;