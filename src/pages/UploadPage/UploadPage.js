// import styling and react-router-dom
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './UploadPage.scss';

// import components
import UploadFormThumbnail from '../../components/UploadFormThumbnail/UploadFormThumbnail';
import UploadFormInputs from '../../components/UploadFormInputs/UploadFormInputs';
import UploadFormButtons from '../../components/UploadFormButtons/UploadFormButtons';

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

        this.setState({
            redirect: true
        });
        const message = 
        `Uploaded!
        Title: ${titleInput.value.trim()}
        Descriptions: ${descriptionInput.value.trim()}`
        alert(message);
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