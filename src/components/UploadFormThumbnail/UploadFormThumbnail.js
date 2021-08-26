// import styling
import './UploadFormThumbnail.scss';

// import data
import videoThumbnail from '../../assets/Images/Profile/Upload-video-preview.jpg';

function UploadFormThumbnail() {
    return(
        <div className="upload__form-thumbnail">
            <p className="upload__form-thumbnail-label">Video Thumbnail</p>
            <img className="upload__form-thumbnail-image" src={videoThumbnail} alt="Biking video thumbnail" />
        </div>
    )
}

export default UploadFormThumbnail;