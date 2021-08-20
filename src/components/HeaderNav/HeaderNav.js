import './HeaderNav.scss';
import PageButton from '../PageButton/PageButton';
import SearchBar from '../SearchBar/SearchBar';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function HeaderNav() {
    return (
        <div className="header__nav">
            <SearchBar />
            <div className="header__upload">
                <PageButton className='header__button' value='UPLOAD' />
                <ProfilePicture className='header__profile-picture'/>
            </div>
        </div>
    )
}

export default HeaderNav;