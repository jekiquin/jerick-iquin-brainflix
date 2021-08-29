// import react
import {Component} from 'react';

// import components
import VideoListSection from "../../components/VideoListSection/VideoListSection";

// import axios
import { brainflix, API_KEY_QSTRING } from '../../peripheral/api';

class SearchPage extends Component {
    state = {
        videoList: null
    }

    componentDidMount() {
        this.getVideoList();
    }

    getVideoList = () => {
        return  brainflix.get(`/videos${API_KEY_QSTRING}`)
                    .then(response => {
                        this.setState({
                            videoList: response.data
                        })
                    })
    }

    findList = () => {
        const {searchstr} = this.props.match.params;
        const {videoList} = this.state;
        return videoList.filter(video => (video.title.toLowerCase().includes(searchstr) || video.channel.toLowerCase().includes(searchstr)))
    }

    
    render() {
        if (!this.state.videoList) {
            return <h1>Loading Pages</h1>
        }

        if(this.findList() === []) {
            return <h1>No videos found!</h1>
        }

        return (
            <main className="search-page">
                <VideoListSection videoList={this.findList()} />
            </main>
        )
    }
}

export default SearchPage;