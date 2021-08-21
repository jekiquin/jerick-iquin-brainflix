import './VideoInfoCard.scss';

function VideoInfoCard({ video,  handleClick }) {
    return (
        <article className="video-list__card" onClick={() => handleClick(video.id)}>
            <img className="video-list__poster" src={video.image} alt={video.title} />
            <div className="video-list__ctx">
                <h3 className="video-list__title">{video.title}</h3>
                <p className="video-list__channel">{video.channel}</p>
            </div>
        </article>
    )
}

export default VideoInfoCard;