// import styling and react-router-dom
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './UploadPage.scss';

// import components
import UploadFormThumbnail from '../../components/UploadFormThumbnail/UploadFormThumbnail';
import UploadFormInputs from '../../components/UploadFormInputs/UploadFormInputs';
import UploadFormButtons from '../../components/UploadFormButtons/UploadFormButtons';

// axios post
import { brainflix } from '../../peripheral/api';

const CHANNEL = 'Jerick Iquin';

class UploadPage extends Component {
    state = {
        redirect: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const titleInput = event.target.title;
        const descriptionInput = event.target.description;
        if(titleInput.value.trim() === '') {
            titleInput.classList.add('upload__form-inputs-input--error');
            return;
        }
        titleInput.classList.remove('upload__form-inputs-input--error');

        this.setState({
            redirect: true
        });
        const message = {
            title: titleInput.value.trim(),
            description: descriptionInput.value.trim(),
            channel: CHANNEL
        }
    
        brainflix.post('/videos', message).then(() => {
            alert(JSON.stringify(message));
        })
        
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <main className="upload">
                <div className="upload__container">
                    <h1 className="upload__heading">Upload Video</h1>
                    <form className="upload__form" onSubmit={e => this.handleSubmit(e)} autoComplete="off">
                        <div className="upload__form-container">
                            <UploadFormThumbnail />
                            <UploadFormInputs />
                        </div>
                        <UploadFormButtons />
                    </form>
                </div>
            </main>
        )
    }
    
}

export default UploadPage;