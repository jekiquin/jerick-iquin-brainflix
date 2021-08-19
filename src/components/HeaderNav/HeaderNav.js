import './HeaderNav.scss';
import PageButton from '../PageButton/PageButton';
import SearchBar from '../SearchBar/SearchBar';

function HeaderNav() {
    return (
        <nav className="header__nav">
            <SearchBar />
            {/* div: button and profile image */}
            <div className="header__upload">
                <PageButton className='header__button' value='+ UPLOAD' />
            </div>
        </nav>
    )
}

export default HeaderNav;