// import styling and react-router-dom
import './Header.scss';
import { Link } from 'react-router-dom';

// import components
import HeaderNav from '../HeaderNav/HeaderNav';

// import data
// import logo from '../../assets/Images/Logo/Logo-brainflix.svg';
import {BASE_URL} from '../../peripheral/apiBrainflix';

function Header() {
    const logo = BASE_URL + '/Logo/Logo-brainflix.svg';
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"><img className="header__logo" src={logo} alt='website logo' /></Link>
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header;