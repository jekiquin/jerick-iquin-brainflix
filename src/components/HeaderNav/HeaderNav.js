import './HeaderNav.scss';
import SearchBar from '../SearchBar/SearchBar';

function HeaderNav() {
    return (
        <nav className="header__nav">
            <SearchBar />
            {/* div: button and profile image */}
        </nav>
    )
}

export default HeaderNav;