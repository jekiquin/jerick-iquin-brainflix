// sass and other imports
import './InfoSection.scss';

// component imports
import Stats from '../Stats/Stats';
import {v4 as uuid} from 'uuid';

// icons import
import seenIcon from '../../assets/Images/Icons/Icon-views.svg';
import likeIcon from '../../assets/Images/Icons/Icon-likes.svg';


function InfoSection({ videoInfo }) {

    return(
        <section className="content__info">
            <h1 className="content__info-heading">{videoInfo.title}</h1>
            <div className="content__info-heading-container">
                <div className="content__info-cite">
                    <h2 className="content__info-channel">{videoInfo.channel}</h2>
                    <p className="content__info-date">{new Date(videoInfo.timestamp).toLocaleDateString()}</p>
                </div>
                <div className="content__info-stats">
                    {
                        [seenIcon, likeIcon].map(icon => {
                            let statCount;
                            if (icon.includes('likes')) {
                                statCount = videoInfo.likes
                            } else if (icon.includes('views')) {
                                statCount = videoInfo.views;
                            }
                            return <Stats
                                        key={uuid()}
                                        icon={icon}
                                        statCount={statCount}
                                    />
                        })  
                    }
                </div>
            </div>
            <div className="content__info-ctx">
                <p className="content__info-paragraph">
                    {videoInfo.description}
                </p>
            </div>
        </section>
    )
}

export default InfoSection;