// import styling and react-router-dom
import { Component } from 'react';
import { Redirect } from 'react-router-dom';


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
        this.setState({
            redirect: true
        });
        alert('Uploaded!')
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <main className="upload">
                <h1 className="upload__heading">Upload Video</h1>
                <form className="upload__form" onSubmit={e => this.handleSubmit(e)} autoComplete="off">
                    <div className="upload__form-container">
                        <UploadFormThumbnail />
                        <UploadFormInputs />
                    </div>
                    <UploadFormButtons />
                </form>
            </main>
        )
    }
    
}

export default UploadPage;