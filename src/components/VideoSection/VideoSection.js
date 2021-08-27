// import styling and react
import { Component, createRef } from 'react';
import './VideoSection.scss';

// function VideoSection({ selectedVideo, selectedPoster }) {
class VideoSection extends Component {
    state = {
        videoNode: null
    }

    videoRef = createRef();

    componentDidMount() {
        this.setState({
            videoNode: this.videoRef.current
        })
    }

    componentDidUpdate(prevProps) {
        const { videoId } = this.props;
        const { videoNode } = this.state;
        console.log(videoId);
        console.log(prevProps.videoId);
        if(videoId !== prevProps.videoId) {
            videoNode.pause();
            videoNode.currentTime = 0;
        }
    }

    stopPlaying = () => {
        const videoNode = this.videoRef.current;
        videoNode.stop();
    }

    render() {
        const { selectedVideo, selectedPoster } = this.props;

        return (
            <section className="content__video-container">
                <video className="content__video" ref={this.videoRef} src={selectedVideo} poster={selectedPoster} controls></video>
            </section>
        )
    }
}

VideoSection.defaultProps = {
    selectedVideo: ''
}
export default VideoSection;