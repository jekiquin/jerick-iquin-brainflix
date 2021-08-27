// imports styling and react
import { Component } from 'react';
import './HomePage.scss';

// imports components
import VideoSection from '../../components/VideoSection/VideoSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoListSection from '../../components/VideoListSection/VideoListSection';

// import axios
import { brainflix, API_KEY } from '../../peripheral/api';

const API_KEY_QSTRING = `?api_key=${API_KEY}`;

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

    componentDidUpdate(prevProps) {
        const { videoList } = this.state;
        const { videoId } = this.props.match.params
        if (videoId !== prevProps.match.params.videoId) {
            if (!videoId) {
                this.getCurrentVideoInfo(videoList[0].id)
            } else {
                this.getCurrentVideoInfo(videoId)
            }
            // move the screen to the top to view the current video
            window.scrollTo(0, 0);
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
        return brainflix.get(`/videos/${id}${API_KEY_QSTRING}`)
            .then(response => {
                this.setState({
                    currentVideoInfo: response.data
                })
            })
    }

    render() {
        const { videoList, currentVideoInfo } = this.state;

        if (!currentVideoInfo) {
            return <h1>Loading...</h1>
        }
        
        return(
            <main className="content">
                <VideoSection videoId={currentVideoInfo.id} selectedVideo={currentVideoInfo.video + API_KEY_QSTRING} selectedPoster={currentVideoInfo.image}/>
                <div className="content__container">
                    <div className="content__main">
                        <InfoSection videoInfo={currentVideoInfo} />
                        <CommentSection commentsInfo={currentVideoInfo.comments} />
                    </div>
                    <VideoListSection videoList={videoList} currentId={currentVideoInfo.id}/>
                </div>
            </main>
        )
    }
};

export default HomePage;