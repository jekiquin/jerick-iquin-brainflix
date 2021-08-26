// import react-router-dom
import { Link } from 'react-router-dom';

// import component
import PageButton from '../../components/PageButton/PageButton';

function UploadFormButtons() {
    return (
        <div className="upload__form-buttons">
            <PageButton submit={true} className="upload__form-submit" value="Publish" />
            <Link className="upload__form-cancel" to="/">Cancel</Link>
        </div>
    )
}

export default UploadFormButtons;