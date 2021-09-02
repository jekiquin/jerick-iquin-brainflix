// import styling
import './UploadFormThumbnail.scss';

// import data
// import videoThumbnail from '../../assets/Images/Profile/Upload-video-preview.jpg';
import {BASE_URL} from '../../peripheral/api';

function UploadFormThumbnail() {
    const videoThumbnail = BASE_URL + '/Profile/Upload-video-preview.jpg';
    return(
        <div className="upload__form-thumbnail">
            <p className="upload__form-thumbnail-label">Video Thumbnail</p>
            <img className="upload__form-thumbnail-image" src={videoThumbnail} alt="Biking video thumbnail" />
        </div>
    )
}

export default UploadFormThumbnail;