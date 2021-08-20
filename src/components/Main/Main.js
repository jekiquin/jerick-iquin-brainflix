// imports
import { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import InfoSection from '../InfoSection/InfoSection';
import CommentSection from '../CommentSection/CommentSection';
import VideoListSection from '../VideoListSection/VideoListSection';

// sass
import './Main.scss';

// data
import videoList from '../../data/video-details.json';

class Main extends Component{
    state = {
        videos: videoList,
        currentId: videoList[0].id,
    }

    // static method
    selectInfo(id) {
        return this.state.videos.find(video => video.id === id);
    }

    selectVideo = (id) => {
        this.setState({
            currentId: id
        })
    }

    render() {
        return(
            <main className="content">
                <VideoSection selectedVideo={''} selectedPoster={this.selectInfo(this.state.currentId).image}/>
                <div className="content__container">
                    <InfoSection videoInfo={this.selectInfo(this.state.currentId)} />
                    <CommentSection commentsInfo={this.selectInfo(this.state.currentId).comments} />
                    <VideoListSection currentId={this.state.currentId} handleClick={this.selectVideo} />
                </div>
            </main>
        )
    }
};

export default Main;