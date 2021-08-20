import { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import './Main.scss';
import videoList from '../../data/video-details.json';

class Main extends Component{
    state = {
        videos: videoList,
        currentId: videoList[0].id
    }

    selectPoster(id) {
        return this.state.videos.find(video => video.id === id).image;
    }

    render() {
        return(
            <main className="content">
                <div className="content__container">
                    <VideoSection selectedVideo={''} selectedPoster={this.selectPoster(this.state.currentId)} />
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
                        */}
                </div>
            </main>
        )
    }
};

export default Main;