// sass import
import './VideoListSection.scss';

// component imports
import VideoInfoCard from '../VideoInfoCard/VideoInfoCard';


function VideoListSection({videoList, currentId})  {
    return (
        <section className="video-list">
            <h3 className="video-list__heading">Next Video</h3>
            {videoList.filter(video => video.id !== currentId).map(video => {
                return (
                    <VideoInfoCard key={video.id} video={video}/>
                )
            })}
        </section>
    )
}

export default VideoListSection;