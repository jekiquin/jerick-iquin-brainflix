import './Stats.scss';

function Stats({ icon, statCount }) {
    return (
        <div className="content__stats">
            <img className="content__stats-icon" src={icon} alt="" aria-hidden="true"/>
            <p className="content__stats-count">{statCount}</p>
        </div>
    )
}

export default Stats;