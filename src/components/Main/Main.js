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
                <div className="content__container">
                    <VideoSection selectedVideo={''} selectedPoster={this.selectInfo(this.state.currentId).image}/>
                    <InfoSection videoInfo={this.selectInfo(this.state.currentId)} />
                    <CommentSection commentsInfo={this.selectInfo(this.state.currentId).comments} />
                    <VideoListSection currentId={this.state.currentId} handleClick={this.selectVideo} />
                    {/* main
                    - section video
                        - video
                    - section info
                        - div info__ctx
                        - h1 info__ctx-heading
                        - div info__ctx-cite
                            - p ctx__cite-person
                            - p info__ctx-cite-date 
                        - div info__ctx-stats
                            - div info__ctx-stats-container
                            - img info__ctx-stats-icon
                            - img info__ctx-stats-count
                    - section videolist
                        
                        */}
                </div>
            </main>
        )
    }
};

export default Main;