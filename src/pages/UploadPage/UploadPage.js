// import styling and react-router-dom
import { Link } from 'react-router-dom';
// import components
import PageButton from '../../components/PageButton/PageButton';

// import data
import videoThumbnail from '../../assets/Images/Profile/Upload-video-preview.jpg';

function UploadPage() {
    return (
        <main className="upload">
            <h1 className="upload__heading">Upload Video</h1>

            <p>Video Thumbnail</p>
            <img className="upload__image" src={videoThumbnail} alt="Biking video thumbnail" />
            <form className="upload__form">
                <label className="upload__form-label" htmlFor="title">Title of your video</label>
                <input className="upload__form-input" type="text" name="title" id="title" placeholder="Add a title to your video" required/>
                <label className="upload__form-label" htmlFor="description">Add a video description</label>
                <textarea className="upload__form-input upload__form-input--textarea" placeholder="Add a description of your video"></textarea>
                <PageButton submit={true} className="upload__form-submit" value="Publish" />
                <Link className="upload__form-cancel" to="/">Cancel</Link>
            </form>
        </main>
    )
}

export default UploadPage;