import { Component } from 'react';
import videoList from '../../data/videos.json';

// function VideoListSection({ currentId, handleClick }) {
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
                        <article className="video-list__card" key={video.id} onClick={() => this.props.handleClick(video.id)}>
                            <img className="video-list__poster" src={video.image} alt={video.title} />
                            <div className="video-list__ctx">
                                <h3 className="video-list__title">{video.title}</h3>
                                <p className="video-list__channel">{video.channel}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        )
    }
}

export default VideoListSection;