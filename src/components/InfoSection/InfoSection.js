import seenLogo from '../../assets/Images/Icons/Icon-views.svg';
import likeLogo from '../../assets/Images/Icons/Icon-likes.svg';

function InfoSection({ videoInfo }) {
    return(
        <div className="content__info">
            <h1 className="content__info-heading">{videoInfo.title}</h1>

            <div className="content__info-cite">
                <h2 className="content__info-person">{videoInfo.channel}</h2>
                <p className="content__info-date">{new Date(videoInfo.timestamp).toLocaleDateString()}</p>
            </div>
            <div className="content__stats">
                <div className="content__stats-container">
                    <img className="content__stats-icon" src={seenLogo} alt="" aria-hidden="true"/>
                    <p className="content__stats-count">{videoInfo.views}</p>
                </div>
                <div className="content__stats-container">
                    <img className="content__stats-icon" src={likeLogo} alt="" aria-hidden="true"/>
                    <p className="content__stats-count">{videoInfo.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection;