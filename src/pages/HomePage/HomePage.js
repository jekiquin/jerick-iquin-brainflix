// imports
import { Component } from 'react';
import VideoSection from '../../components/VideoSection/VideoSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoListSection from '../../components/VideoListSection/VideoListSection';

// sass
import './HomePage.scss';

// data
import videos from '../../data/video-details.json';
import videoList from '../../data/videos.json';

class Main extends Component{
    state = {
        videos,
        videoList,
        currentId: videos[0].id,
    }

    selectInfo(id) {
        return this.state.videos.find(video => video.id === id);
    }

    selectVideo = (id) => {
        this.setState({
            currentId: id
        })
    }

    render() {
        const { videoList, currentId } = this.state;
        
        return(
            <main className="content">
                <VideoSection selectedVideo={''} selectedPoster={this.selectInfo(currentId).image}/>
                <div className="content__container">
                    <div className="content__main">
                        <InfoSection videoInfo={this.selectInfo(currentId)} />
                        <CommentSection commentsInfo={this.selectInfo(currentId).comments} />
                    </div>
                    <VideoListSection videoList={videoList} currentId={currentId} handleClick={this.selectVideo} />
                </div>
            </main>
        )
    }
};

export default Main;