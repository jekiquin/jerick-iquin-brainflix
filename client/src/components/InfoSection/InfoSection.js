// sass and other imports
import './InfoSection.scss';

// component imports
import Stats from '../Stats/Stats';
import {v4 as uuid} from 'uuid';

// import base_url from api
import {BASE_URL} from '../../peripheral/apiBrainflix';


function InfoSection({ videoInfo }) {
    const seenIcon = BASE_URL + '/Icons/Icon-views.svg';
    const likeIcon = BASE_URL + '/Icons/Icon-likes.svg';
    const { title, channel, timestamp, description } = videoInfo;
    const statsCount = [seenIcon, likeIcon]
        .map(icon => {
            let statCount;
            if (icon.includes('likes')) {
                statCount = videoInfo.likes;
            } else if (icon.includes('views')) {
                statCount = videoInfo.views;
            }
            return <Stats
                        key={uuid()}
                        icon={icon}
                        statCount={statCount}
                    />
        }) 

    return(
        <section className="content__info">
            <h1 className="content__info-heading">{title}</h1>
            <div className="content__info-heading-container">
                <div className="content__info-cite">
                    <p className="content__info-channel">{channel}</p>
                    <p className="content__info-date">{new Date(timestamp).toLocaleDateString()}</p>
                </div>
                <div className="content__info-stats">
                    { statsCount }
                </div>
            </div>
            <div className="content__info-ctx">
                <p className="content__info-paragraph">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default InfoSection;