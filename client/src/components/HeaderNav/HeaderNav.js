// import styling and react-router-dom
import './HeaderNav.scss';
import { Link } from 'react-router-dom';

// import component
import SearchBar from '../SearchBar/SearchBar';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function HeaderNav() {
    return (
        <div className="header__nav">
            <SearchBar />
            <div className="header__upload">
                <Link to="/upload" className="header__button">&nbsp;UPLOAD</Link>
                <ProfilePicture className='header__profile-picture'/>
            </div>
        </div>
    )
}

export default HeaderNav;