// imports
import { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import InfoSection from '../InfoSection/InfoSection';

// sass
import './Main.scss';

// data
import videoList from '../../data/video-details.json';

class Main extends Component{
    state = {
        videos: videoList,
        currentId: videoList[0].id,
    }

    selectInfo(id) {
        return this.state.videos.find(video => video.id === id);
    }

    render() {
        return(
            <main className="content">
                <div className="content__container">
                    <VideoSection selectedVideo={''} selectedPoster={this.selectInfo(this.state.currentId).image}/>
                    <InfoSection videoInfo={this.selectInfo(this.state.currentId)} />
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