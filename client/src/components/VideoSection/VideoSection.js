// import styling and react
import { Component, createRef } from 'react';
import './VideoSection.scss';

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
        if(videoId !== prevProps.videoId) {
            this.stopPlaying();
        }
    }

    // componentWillUnmount() {
    //     this.stopPlaying();
    // }

    stopPlaying = () => {
        const { videoNode } = this.state;
        videoNode.pause();
        videoNode.currentTime = 0;
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