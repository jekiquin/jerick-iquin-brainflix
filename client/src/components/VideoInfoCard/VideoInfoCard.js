// import styling and react-router-dom
import './VideoInfoCard.scss';
import { Link } from 'react-router-dom';

function VideoInfoCard({ video }) {
    const { id, image, title, channel } = video;
    return (
        <Link to={`/video/${id}`}>
        <article className="video-list__card">
            <img className="video-list__poster" src={image} alt={title} />
            <div className="video-list__ctx">
                <h3 className="video-list__title">{title}</h3>
                <p className="video-list__channel">{channel}</p>
            </div>
        </article>
        </Link>
    )
}

export default VideoInfoCard;