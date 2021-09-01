// sass import
import './VideoListSection.scss';

// component imports
import VideoInfoCard from '../VideoInfoCard/VideoInfoCard';


function VideoListSection({videoList})  {
    return (
        <section className="video-list">
            <h3 className="video-list__heading">Next Video</h3>
            {videoList.length 
                ? videoList.map(video => {
                    return (
                        <VideoInfoCard key={video.id} video={video}/>
                    )})
                : <p>No Videos Found!</p>
            }
        </section>
    )
}

export default VideoListSection;