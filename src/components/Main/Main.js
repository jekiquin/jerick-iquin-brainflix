import { Component } from 'react';
import './Main.scss';
import '../../data/video-details.json';

class Main extends Component{
    render() {
        return(
            <main className="content">
                <div className="content__container">
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