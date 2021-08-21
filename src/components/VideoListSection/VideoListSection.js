// react import
import { Component } from 'react';
import './VideoListSection.scss';

// component imports
import VideoInfoCard from '../VideoInfoCard/VideoInfoCard';

// data import
import videoList from '../../data/videos.json';

class VideoListSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: videoList
        }
    }

    render() {
        return (
            <section className="video-list">
                <h2 className="video-list__heading">NEXT VIDEO</h2>
                {this.state.videos.filter(video => video.id !== this.props.currentId).map(video => {
                    return (
                        <VideoInfoCard key={video.id} video={video} handleClick={this.props.handleClick} />
                    )
                })}
            </section>
        )
    }
}

export default VideoListSection;