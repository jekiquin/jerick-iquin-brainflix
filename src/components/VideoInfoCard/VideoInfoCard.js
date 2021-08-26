import './VideoInfoCard.scss';

function VideoInfoCard({ video,  handleClick }) {
    const { id, image, title, channel } = video;
    return (
        <article className="video-list__card" onClick={() => handleClick(id)}>
            <img className="video-list__poster" src={image} alt={title} />
            <div className="video-list__ctx">
                <h3 className="video-list__title">{title}</h3>
                <p className="video-list__channel">{channel}</p>
            </div>
        </article>
    )
}

export default VideoInfoCard;