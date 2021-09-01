// imports styling and react
import { Component } from 'react';
import './HomePage.scss';

// imports components
import VideoSection from '../../components/VideoSection/VideoSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoListSection from '../../components/VideoListSection/VideoListSection';

// import axios
import { brainflix, API_KEY_QSTRING } from '../../peripheral/api';

const USER_NAME = 'Jerick Iquin';

class HomePage extends Component{
    state = {
        videoList: [],
        currentVideoInfo: null
    }

    componentDidMount() {
        // move the screen to the top to view the current video
        this.getVideoList()
            .then(id => {
                this.getCurrentVideoInfo(id);
            })
            .then(() => {
                 // move the screen to the top to view the current video
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.log('Error loading videos!');
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const { videoId } = this.props.match.params;
        if (videoId !== prevProps.match.params.videoId) {
            this.getCurrentVideoInfo(videoId)
            // move the screen to the top to view the current video
            window.scrollTo(0, 0);
            return;
        }  
        
        const currentCommentsLength = this.state.currentVideoInfo ? this.state.currentVideoInfo.comments.length : 0;
        const prevCommentsLength = prevState.currentVideoInfo ? prevState.currentVideoInfo.comments.length : 0;
        if(currentCommentsLength !== prevCommentsLength) {
            this.getCurrentVideoInfo(videoId);
        } 
    }

    getVideoList = () => {
        return  brainflix.get(`/videos${API_KEY_QSTRING}`)
                    .then(response => {
                        this.setState({
                            videoList: response.data
                        })
                        return response.data[0].id;
                    })
    }

    getCurrentVideoInfo = id => {
        id = id || this.state.videoList[0].id;
        return brainflix.get(`/videos/${id}${API_KEY_QSTRING}`)
            .then(response => {
                this.setState({
                    currentVideoInfo: response.data
                })
            })
    }

    handleSubmitComment = (event, videoId) => {
        event.preventDefault();
        const commentInput = event.target.comment;
        if (commentInput.value.trim() === '') {
            commentInput.classList.add('comments__form-input--error');
            return
        }
        commentInput.classList.remove('comments__form-input--error');

        brainflix.post(`/videos/${videoId}/comments${API_KEY_QSTRING}`, 
            {
                name: USER_NAME,
                comment: commentInput.value.trim()
            })
            .then(() => {
                event.target.reset();
                this.getCurrentVideoInfo(videoId);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleDeleteComment = (videoId, commentId) => {
        brainflix.delete(`/videos/${videoId}/comments/${commentId}${API_KEY_QSTRING}`)
            .then(() => {
                this.getCurrentVideoInfo(videoId);
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        const { videoList, currentVideoInfo } = this.state;

        if (!currentVideoInfo) {
            return <h1>Loading...</h1>
        }

        const videoId = currentVideoInfo.id;
        const filteredVideos = videoList.filter(video => video.id !== videoId);
        
        return(
            <main className="content">
                <VideoSection videoId={currentVideoInfo.id} selectedVideo={currentVideoInfo.video + API_KEY_QSTRING} selectedPoster={currentVideoInfo.image}/>
                <div className="content__container">
                    <div className="content__main">
                        <InfoSection videoInfo={currentVideoInfo} />
                        <CommentSection currentVideoInfo={currentVideoInfo} handleSubmit={this.handleSubmitComment} handleClick={this.handleDeleteComment}/>
                    </div>
                    <VideoListSection videoList={filteredVideos} />
                </div>
            </main>
        )
    }
};

export default HomePage;